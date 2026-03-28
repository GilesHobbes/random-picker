"use client";

import Link from "next/link";
import { HomeOverviewPanel } from "@/components/home/HomeOverviewPanel";
import { RecentResultPanel } from "@/components/RecentResultPanel";
import { StageShell } from "@/components/StageShell";
import { usePickerStore } from "@/hooks/usePickerStore";

export default function HomePage() {
  const { latest } = usePickerStore();

  return (
    <StageShell
      title="Random picker"
      eyebrow="Aurora Prism Stage"
      subtitle="Seed-driven pseudo-random reveals for Base mini experiences."
    >
      <div className="page-grid page-grid-home">
        <HomeOverviewPanel />
        <RecentResultPanel record={latest} />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <section className="hero-panel">
          <div className="panel-inner mobile-stack">
            <div className="section-header">
              <div>
                <p className="muted">Fast Actions</p>
                <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
                  Open the Stage
                </h2>
              </div>
            </div>
            <div className="quick-actions">
              <Link href="/pick" className="btn btn-primary">
                Generate Result
              </Link>
              <Link href="/history" className="btn btn-secondary">
                Open History
              </Link>
            </div>
          </div>
        </section>
      </div>
    </StageShell>
  );
}

