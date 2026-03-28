"use client";

import Link from "next/link";
import { usePickerStore } from "@/hooks/usePickerStore";

export function HomeOverviewPanel() {
  const { latest, records } = usePickerStore();

  return (
    <section className="hero-panel">
      <div className="panel-inner mobile-stack">
        <span className="eyebrow">
          <span className="icon-dot" />
          Reveal Hub
        </span>
        <h2 className="title-lg">Seed. Trigger. Spotlight.</h2>
        <p className="subtitle stage-copy">
          A compact random reveal tool with clear history, direct detail routes, and a clean stage-first flow.
        </p>

        <div className="stats-grid">
          <div className="metric-card">
            <span className="muted">Archive Size</span>
            <strong>{records.length}</strong>
          </div>
          <div className="metric-card">
            <span className="muted">Latest Result</span>
            <strong>{latest ? latest.result : "--"}</strong>
          </div>
          <div className="metric-card">
            <span className="muted">Status</span>
            <strong>{latest ? "Stage Warm" : "Ready"}</strong>
          </div>
        </div>

        <div className="quick-actions">
          <Link href="/pick" className="btn btn-primary">
            Start Picking
          </Link>
          <Link href="/history" className="btn btn-secondary">
            View History
          </Link>
        </div>
      </div>
    </section>
  );
}

