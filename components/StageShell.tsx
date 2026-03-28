import { BottomNav } from "@/components/BottomNav";
import { PickerHeader } from "@/components/PickerHeader";
import type { ReactNode } from "react";

type StageShellProps = {
  children: ReactNode;
  title: string;
  eyebrow: string;
  subtitle: string;
  compact?: boolean;
};

export function StageShell({
  children,
  title,
  eyebrow,
  subtitle,
  compact = false,
}: StageShellProps) {
  return (
    <div className="page-shell">
      <div className="app-frame">
        <PickerHeader title={title} eyebrow={eyebrow} subtitle={subtitle} compact={compact} />
        {children}
      </div>
      <BottomNav />
    </div>
  );
}

