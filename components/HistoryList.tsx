import Link from "next/link";
import { EmptyState } from "@/components/EmptyState";
import { formatShortDate } from "@/lib/format";
import type { PickerRecord } from "@/types/picker";

export function HistoryList({ records }: { records: PickerRecord[] }) {
  if (!records.length) {
    return (
      <EmptyState
        title="Archive is dark"
        description="Run a reveal to store your first pseudo-random result."
        href="/pick"
        cta="Create First Reveal"
      />
    );
  }

  return (
    <div className="history-grid">
      {records.map((record, index) => (
        <Link key={record.id} href={`/results/${record.id}`} className="history-card fade-in">
          <div className="section-header">
            <span className="eyebrow">Reveal {String(index + 1).padStart(2, "0")}</span>
            <span className="chip">Range {record.max}</span>
          </div>
          <div className="result-line">
            <span className="muted">Result</span>
            <strong>{record.result}</strong>
          </div>
          <div className="detail-pair">
            <span>Seed</span>
            <strong>{record.seed}</strong>
          </div>
          <div className="history-meta">
            <span>{formatShortDate(record.createdAt)}</span>
            <span>?</span>
            <span className="mono">{record.id.slice(0, 10)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

