import { WalletButton } from "@/components/WalletButton";

type PickerHeaderProps = {
  title: string;
  eyebrow: string;
  subtitle: string;
  compact?: boolean;
};

export function PickerHeader({
  title,
  eyebrow,
  subtitle,
  compact = false,
}: PickerHeaderProps) {
  return (
    <header className="header-row">
      <div className="header-stack">
        <span className="eyebrow">
          <span className="icon-dot" />
          {eyebrow}
        </span>
        <h1 className={compact ? "title-lg" : "title-xl"}>{title}</h1>
        <p className="subtitle stage-copy">{subtitle}</p>
      </div>
      <WalletButton />
    </header>
  );
}

