"use client";

import { useMemo, useState } from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { encodeFunctionData, Hex, keccak256, stringToHex } from "viem";
import { usePickerStore } from "@/hooks/usePickerStore";
import { RANDOM_PICKER_CONTRACT } from "@/lib/contracts";
import { buildPickerRecord, computePseudoRandom } from "@/lib/picker";
import { BASE_APP_ID, appendBuilderCodeSuffix } from "@/lib/base-miniapp";
import { config } from "@/lib/wagmi";
import { trackTransaction } from "@/utils/track";
import type { PickerRecord, PickerStatus } from "@/types/picker";

function seedToUint(seed: string) {
  return BigInt(keccak256(stringToHex(seed)));
}

export function useRandomPicker() {
  const { address, isConnected } = useAccount();
  const { saveRecord } = usePickerStore();
  const { sendTransactionAsync } = useSendTransaction();
  const [status, setStatus] = useState<PickerStatus>("idle");
  const [currentRecord, setCurrentRecord] = useState<PickerRecord | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  const source = useMemo(() => (address ? "Wallet Synced" : "Local Preview"), [address]);

  function saveLocalRecord(seed: string, nextTxHash?: string) {
    const result = computePseudoRandom({
      seed,
      address,
      max: 100,
    });

    const record = buildPickerRecord({
      seed,
      result,
      max: 100,
      source: nextTxHash ? "Onchain Trace" : source,
      txHash: nextTxHash,
    });

    setCurrentRecord(record);
    saveRecord(record);
    return record;
  }

  async function generate(seed: string) {
    if (!seed.trim()) return null;

    setStatus("generating");
    setTxHash(null);
    await new Promise((resolve) => window.setTimeout(resolve, 920));

    const record = saveLocalRecord(seed);
    setStatus("result");
    return record;
  }

  async function generateOnchain(seed: string) {
    if (!seed.trim() || !address || !isConnected) return null;

    setStatus("generating");
    setTxHash(null);

    const callData = encodeFunctionData({
      abi: RANDOM_PICKER_CONTRACT.abi,
      functionName: "pick",
      args: [seedToUint(seed), BigInt(100)],
    });

    const dataWithSuffix = appendBuilderCodeSuffix(callData as Hex);

    const hash = await sendTransactionAsync({
      to: RANDOM_PICKER_CONTRACT.address,
      data: dataWithSuffix,
    });

    setTxHash(hash);
    await waitForTransactionReceipt(config, { hash });

    const record = saveLocalRecord(seed, hash);
    trackTransaction(BASE_APP_ID, "random-picker", address, hash);
    setStatus("result");
    return record;
  }

  return { status, currentRecord, generate, generateOnchain, address, txHash, isConnected };
}
