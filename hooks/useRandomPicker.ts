"use client";

import { useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { usePickerStore } from "@/hooks/usePickerStore";
import { buildPickerRecord, computePseudoRandom } from "@/lib/picker";
import type { PickerRecord, PickerStatus } from "@/types/picker";

export function useRandomPicker() {
  const { address } = useAccount();
  const { saveRecord } = usePickerStore();
  const [status, setStatus] = useState<PickerStatus>("idle");
  const [currentRecord, setCurrentRecord] = useState<PickerRecord | null>(null);

  const source = useMemo(() => (address ? "Wallet Synced" : "Local Preview"), [address]);

  async function generate(seed: string) {
    if (!seed.trim()) return;

    setStatus("generating");
    await new Promise((resolve) => window.setTimeout(resolve, 920));

    const result = computePseudoRandom({
      seed,
      address,
      max: 100,
    });

    const record = buildPickerRecord({
      seed,
      result,
      max: 100,
      source,
    });

    setCurrentRecord(record);
    saveRecord(record);
    setStatus("result");

    // TODO: Replace the local preview flow with Base contract reads or writes.
    // When a write transaction exists, call trackTransaction with the actual tx hash.
  }

  return { status, currentRecord, generate, address };
}

