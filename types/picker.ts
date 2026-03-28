export type PickerStatus = "ready" | "generating" | "result" | "copied" | "idle";

export type PickerRecord = {
  id: string;
  seed: string;
  result: number;
  max: number;
  createdAt: string;
  source: string;
  txHash?: string;
  chainName?: string;
  builderCode?: string;
};
