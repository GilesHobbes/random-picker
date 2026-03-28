import Link from "next/link";
import { ResultStatusChip } from "@/components/ResultStatusChip";
import { formatShortDate } from "@/lib/format";
import type { PickerRecord } from "@/types/picker";

export function RecentResultPanel({ record }: { record?: PickerRecord | null }) {
  return (
    <section className="panel">
      <div className="panel-inner mobile-stack">
        <div className="section-header">
          <div>
            <p className="muted">Latest Archive</p>
            <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
              Recent Reveal
            </h2>
          </div>
          <ResultStatusChip status={record ? "result" : "idle"} />
        </div>

        {record ? (
          <div className="recent-card">
            <div className="result-line">
              <span className="muted">Result</span>
              <strong>{record.result}</strong>
            </div>
            <div className="detail-pair">
              <span>Seed</span>
              <strong>{record.seed}</strong>
            </div>
            <div className="inline-meta">
              <span>{formatShortDate(record.createdAt)}</span>
              <span>•</span>
              <span>{record.txHash ? "Onchain Trace" : "Local Preview"}</span>
            </div>
            <Link href={`/results/${record.id}`} className="btn btn-secondary">
              Open Result
            </Link>
          </div>
        ) : (
          <div className="empty-state">
            <h3 className="title-md">No reveal saved yet</h3>
            <p className="muted">Create your first seed-driven result to light up the archive.</p>
            <Link href="/pick" className="btn btn-primary">
              Start Picking
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
