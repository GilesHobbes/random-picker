import { BASE_BUILDER_CODE } from "@/lib/base-miniapp";
import type { PickerRecord } from "@/types/picker";

function hashText(input: string) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

export function computePseudoRandom({
  seed,
  address,
  max,
}: {
  seed: string;
  address?: string;
  max: number;
}) {
  const entropy = `${seed.trim()}::${address?.toLowerCase() ?? "guest"}::${new Date().toISOString()}`;
  return hashText(entropy) % max;
}

export function buildPickerRecord({
  seed,
  result,
  max,
  source,
  txHash,
}: {
  seed: string;
  result: number;
  max: number;
  source: string;
  txHash?: string;
}): PickerRecord {
  const createdAt = new Date().toISOString();
  const slug = `${hashText(`${seed}-${createdAt}`)}`.slice(0, 10);

  return {
    id: `pick-${slug}`,
    seed: seed.trim(),
    result,
    max,
    createdAt,
    source,
    txHash,
    chainName: "Base",
    builderCode: BASE_BUILDER_CODE,
  };
}

