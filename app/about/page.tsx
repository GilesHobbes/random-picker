import Link from "next/link";
import { StageShell } from "@/components/StageShell";

export default function AboutPage() {
  return (
    <StageShell
      title="About the stage"
      eyebrow="Mini App Notes"
      subtitle="A compact seed-based picker built for fast reveals, clear routes, and easy contract upgrades."
      compact
    >
      <section className="about-panel">
        <div className="panel-inner mobile-stack">
          <div className="section-header">
            <div>
              <p className="muted">How It Works</p>
              <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
                Minimal Rules
              </h2>
            </div>
          </div>

          <div className="info-grid">
            <div className="detail-panel">
              <div className="detail-pair">
                <span>Contract</span>
                <strong className="mono">0x72da052f624a5a75556f59e3fe227e5fac84fc6e</strong>
              </div>
            </div>
            <div className="detail-panel">
              <div className="detail-pair">
                <span>Logic</span>
                <strong>Seed in, pseudo-random result out.</strong>
              </div>
            </div>
            <div className="detail-panel">
              <div className="detail-pair">
                <span>Base Meta</span>
                <strong className="mono">69c22f7b3c2c56b9bbd2f616</strong>
              </div>
            </div>
            <div className="detail-panel">
              <div className="detail-pair">
                <span>Tracking</span>
                <strong>Prepared for transaction attribution hooks.</strong>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <Link href="/pick" className="btn btn-primary">
              Open Picker
            </Link>
            <Link href="/history" className="btn btn-secondary">
              Open Archive
            </Link>
          </div>
        </div>
      </section>
    </StageShell>
  );
}

