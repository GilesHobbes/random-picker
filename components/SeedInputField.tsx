"use client";

type SeedInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SeedInputField({ value, onChange }: SeedInputFieldProps) {
  return (
    <div className="seed-field">
      <label htmlFor="seed-input">Seed Input</label>
      <textarea
        id="seed-input"
        className="seed-textarea"
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter any phrase, number, or round label"
      />
    </div>
  );
}

