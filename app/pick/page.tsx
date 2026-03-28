import { GeneratePanel } from "@/components/GeneratePanel";
import { StageShell } from "@/components/StageShell";

export default function PickPage() {
  return (
    <StageShell
      title="Pick a result"
      eyebrow="Reveal Console"
      subtitle="Feed the stage with a seed and generate a fresh pseudo-random outcome."
      compact
    >
      <GeneratePanel />
    </StageShell>
  );
}

