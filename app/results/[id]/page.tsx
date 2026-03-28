"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ActionBar } from "@/components/ActionBar";
import { EmptyState } from "@/components/EmptyState";
import { ResultStatusChip } from "@/components/ResultStatusChip";
import { StageShell } from "@/components/StageShell";
import { usePickerStore } from "@/hooks/usePickerStore";
import { formatLongDate } from "@/lib/format";

export default function ResultDetailPage() {
  const params = useParams<{ id: string }>();
  const { getRecordById } = usePickerStore();
  const record = getRecordById(params.id);

  return (
    <StageShell
      title="Result spotlight"
      eyebrow="Detail Route"
      subtitle="Single reveal focus with clear seed, timestamp, and result actions."
      compact
    >
      {record ? (
        <section className="result-panel">
          <div className="panel-inner mobile-stack">
            <div className="section-header">
              <div>
                <p className="muted">Result Detail</p>
                <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
                  Spotlight Surface
                </h2>
              </div>
              <ResultStatusChip status="result" />
            </div>

            <div className="result-core">
              <div className="result-number">{record.result}</div>
              <div className="chip-row">
                <span className="chip">Range {record.max}</span>
                <span className="chip">{record.txHash ? "Onchain Trace" : "Local Preview"}</span>
                <span className="chip">{record.chainName ?? "Base"}</span>
              </div>
            </div>

            <div className="detail-grid">
              <div className="detail-panel">
                <div className="detail-pair">
                  <span>Seed</span>
                  <strong>{record.seed}</strong>
                </div>
              </div>
              <div className="detail-panel">
                <div className="detail-pair">
                  <span>Created</span>
                  <strong>{formatLongDate(record.createdAt)}</strong>
                </div>
              </div>
              <div className="detail-panel">
                <div className="detail-pair">
                  <span>Record ID</span>
                  <strong className="mono">{record.id}</strong>
                </div>
              </div>
              <div className="detail-panel">
                <div className="detail-pair">
                  <span>Source</span>
                  <strong>{record.source}</strong>
                </div>
              </div>
              <div className="detail-panel">
                <div className="detail-pair">
                  <span>Builder Code</span>
                  <strong className="mono">{record.builderCode ?? "bc_y36qskym"}</strong>
                </div>
              </div>
              <div className="detail-panel">
                <div className="detail-pair">
                  <span>Tx Hash</span>
                  <strong className="mono">{record.txHash ?? "No onchain trace yet"}</strong>
                </div>
              </div>
            </div>

            <ActionBar copyValue={`${record.result}`} />

            <Link href="/pick" className="btn btn-secondary">
              Pick Again
            </Link>
          </div>
        </section>
      ) : (
        <section className="about-panel">
          <div className="panel-inner">
            <EmptyState
              title="Result not found"
              description="The requested reveal is not in local history yet."
              href="/history"
              cta="Open Archive"
            />
          </div>
        </section>
      )}
    </StageShell>
  );
}
