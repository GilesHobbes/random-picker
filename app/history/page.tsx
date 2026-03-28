"use client";

import { HistoryList } from "@/components/HistoryList";
import { StageShell } from "@/components/StageShell";
import { usePickerStore } from "@/hooks/usePickerStore";

export default function HistoryPage() {
  const { records } = usePickerStore();

  return (
    <StageShell
      title="Reveal archive"
      eyebrow="History Board"
      subtitle="Browse recent picks, open individual result routes, and scan the stage memory."
      compact
    >
      <section className="archive-panel">
        <div className="panel-inner mobile-stack">
          <div className="section-header">
            <div>
              <p className="muted">Saved Results</p>
              <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
                Recent Records
              </h2>
            </div>
            <span className="chip">{records.length} Items</span>
          </div>
          <HistoryList records={records} />
        </div>
      </section>
    </StageShell>
  );
}

