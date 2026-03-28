"use client";

import { useMemo, useState } from "react";
import { ResultRevealCard } from "@/components/ResultRevealCard";
import { ResultStatusChip } from "@/components/ResultStatusChip";
import { SeedInputField } from "@/components/SeedInputField";
import { useRandomPicker } from "@/hooks/useRandomPicker";
import { usePickerStore } from "@/hooks/usePickerStore";
import { BASE_BUILDER_CODE } from "@/lib/base-miniapp";
import { PickerStatus } from "@/types/picker";

type GeneratePanelProps = {
  defaultSeed?: string;
};

export function GeneratePanel({ defaultSeed = "" }: GeneratePanelProps) {
  const [seed, setSeed] = useState(defaultSeed);
  const [copied, setCopied] = useState(false);
  const { latest } = usePickerStore();
  const { status, currentRecord, generate, generateOnchain, address, txHash, isConnected } = useRandomPicker();

  const liveStatus = useMemo<PickerStatus>(() => {
    if (copied) return "copied";
    if (currentRecord) return status;
    if (seed.trim()) return "ready";
    return "idle";
  }, [copied, currentRecord, seed, status]);

  async function handleGenerate() {
    setCopied(false);
    await generate(seed);
  }

  async function handleGenerateOnchain() {
    setCopied(false);
    await generateOnchain(seed);
  }

  return (
    <div className="stage-row">
      <section className="panel">
        <div className="panel-inner mobile-stack">
          <div className="section-header">
            <div>
              <p className="muted">Seed Control</p>
              <h2 className="title-md" style={{ marginTop: "0.2rem" }}>
                Trigger a Reveal
              </h2>
            </div>
            <ResultStatusChip status={liveStatus} />
          </div>

          <SeedInputField value={seed} onChange={setSeed} />

          <div className="stats-grid">
            <div className="metric-card">
              <span className="muted">Mode</span>
              <strong>{address ? "Wallet Synced" : "Guest Seed"}</strong>
            </div>
            <div className="metric-card">
              <span className="muted">Latest</span>
              <strong>{latest ? latest.result : "--"}</strong>
            </div>
            <div className="metric-card">
              <span className="muted">Builder</span>
              <strong>{BASE_BUILDER_CODE}</strong>
            </div>
          </div>

          <div className="quick-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleGenerate}
              disabled={!seed.trim() || status === "generating"}
            >
              {status === "generating" ? "Generating" : "Generate Result"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleGenerateOnchain}
              disabled={!seed.trim() || !isConnected || status === "generating"}
            >
              Generate Onchain Trace
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setSeed("")}>
              Clear Seed
            </button>
          </div>

          <p className="meta-text">
            Local reveal is instant. Onchain trace appends the Base builder code suffix for attribution-ready transaction hashes.
          </p>
          {txHash ? <p className="meta-text mono">Tx {txHash}</p> : null}
        </div>
      </section>

      <ResultRevealCard
        status={liveStatus}
        record={currentRecord ?? latest}
        heading="Live Reveal"
        copiedStatus={copied}
        onCopied={() => setCopied(true)}
      />
    </div>
  );
}

