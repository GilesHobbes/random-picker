"use client";

import { useState } from "react";

type CopyResultButtonProps = {
  value: string;
  onCopied?: () => void;
};

export function CopyResultButton({ value, onCopied }: CopyResultButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="btn btn-ghost" onClick={handleCopy}>
      {copied ? "Copied" : "Copy Result"}
    </button>
  );
}

