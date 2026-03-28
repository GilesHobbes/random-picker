import Link from "next/link";
import { StageShell } from "@/components/StageShell";
import { BASE_APP_ID, BASE_BUILDER_CODE } from "@/lib/base-miniapp";

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
                <span>Base App ID</span>
                <strong className="mono">{BASE_APP_ID}</strong>
              </div>
            </div>
            <div className="detail-panel">
              <div className="detail-pair">
                <span>Builder Code</span>
                <strong className="mono">{BASE_BUILDER_CODE}</strong>
              </div>
            </div>
            <div className="detail-panel">
              <div className="detail-pair">
                <span>8021 Suffix</span>
                <strong className="mono">Enabled in onchain trace transactions.</strong>
              </div>
            </div>
            <div className="detail-panel">
              <div className="detail-pair">
                <span>Tracking</span>
                <strong>Successful onchain traces call the attribution endpoint.</strong>
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

