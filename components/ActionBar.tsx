import Link from "next/link";
import { CopyResultButton } from "@/components/CopyResultButton";

type ActionBarProps = {
  detailHref?: string;
  copyValue: string;
  onCopied?: () => void;
};

export function ActionBar({ detailHref, copyValue, onCopied }: ActionBarProps) {
  return (
    <div className="action-bar">
      <CopyResultButton value={copyValue} onCopied={onCopied} />
      {detailHref ? (
        <Link href={detailHref} className="btn btn-secondary">
          Open Detail
        </Link>
      ) : null}
      <Link href="/history" className="btn btn-secondary">
        Open History
      </Link>
    </div>
  );
}

