import { PickerStatus } from "@/types/picker";

const labelMap: Record<PickerStatus, string> = {
  ready: "Ready",
  generating: "Generating",
  result: "Result Locked",
  copied: "Copied",
  idle: "No Result Yet",
};

export function ResultStatusChip({ status }: { status: PickerStatus }) {
  return <span className={`status-chip status-${status}`}>{labelMap[status]}</span>;
}

