import Link from "next/link";
import { ActionBar } from "@/components/ActionBar";
import { ResultStatusChip } from "@/components/ResultStatusChip";
import { formatShortDate } from "@/lib/format";
import type { PickerRecord, PickerStatus } from "@/types/picker";

type ResultRevealCardProps = {
  status: PickerStatus;
  record?: PickerRecord | null;
  heading?: string;
  copiedStatus?: boolean;
  onCopied?: () => void;
};

export function ResultRevealCard({
  status,
  record,
  heading = "Current Reveal",
  copiedStatus = false,
  onCopied,
}: ResultRevealCardProps) {
  const activeStatus = copiedStatus ? "copied" : status;

  return (
    <section className="result-panel">
      <div className="panel-inner spotlight-grid">
        <div className="result-core fade-in">
          <div className="floating-orb orb-violet" />
          <div className="floating-orb orb-teal" />
          <div className="section-header">
            <div>
              <p className="muted">{heading}</p>
              <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
                Stage Result
              </h2>
            </div>
            <ResultStatusChip status={activeStatus} />
          </div>
          <div className="aurora-bar" />
          <div className="result-number">{record ? record.result : "--"}</div>
          <div className="result-pill-row">
            <span className="chip">Max Range {record?.max ?? 100}</span>
            <span className="chip">{record?.chainName ?? "Base"}</span>
            <span className="chip">{record?.txHash ? "Attribution Ready" : "Preview Flow"}</span>
          </div>
        </div>

        <div className="mobile-stack">
          <div className="detail-panel">
            <div className="detail-pair">
              <span>Seed</span>
              <strong>{record?.seed ?? "Waiting for a seed input"}</strong>
            </div>
          </div>
          <div className="detail-panel">
            <div className="detail-pair">
              <span>Created</span>
              <strong>{record ? formatShortDate(record.createdAt) : "No timestamp"}</strong>
            </div>
          </div>
          <div className="detail-panel">
            <div className="detail-pair">
              <span>Builder Code</span>
              <strong className="mono">{record?.builderCode ?? "bc_y36qskym"}</strong>
            </div>
          </div>
          <div className="detail-panel">
            <div className="detail-pair">
              <span>Tx Hash</span>
              <strong className="mono">{record?.txHash ?? "No onchain trace yet"}</strong>
            </div>
          </div>
          <ActionBar
            detailHref={record ? `/results/${record.id}` : undefined}
            copyValue={record ? `${record.result}` : "No result"}
            onCopied={onCopied}
          />
          {record ? (
            <Link href={`/results/${record.id}`} className="mini-link btn btn-ghost">
              Reveal Full Detail
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
