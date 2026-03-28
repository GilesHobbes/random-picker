"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MOCK_HISTORY } from "@/lib/mock-data";
import type { PickerRecord } from "@/types/picker";

const STORAGE_KEY = "random-picker-records";

type PickerStoreContextValue = {
  records: PickerRecord[];
  latest: PickerRecord | null;
  saveRecord: (record: PickerRecord) => void;
  getRecordById: (id: string) => PickerRecord | null;
};

const PickerStoreContext = createContext<PickerStoreContextValue | null>(null);

export function PickerStoreProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<PickerRecord[]>(MOCK_HISTORY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as PickerRecord[];
        setRecords(parsed);
      } catch {
        setRecords(MOCK_HISTORY);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [hydrated, records]);

  const saveRecord = useCallback((record: PickerRecord) => {
    setRecords((current) => [record, ...current].slice(0, 18));
  }, []);

  const latest = useMemo(() => records[0] ?? null, [records]);

  const getRecordById = useCallback(
    (id: string) => records.find((record) => record.id === id) ?? null,
    [records],
  );

  const value = useMemo(
    () => ({ records, latest, saveRecord, getRecordById }),
    [getRecordById, latest, records, saveRecord],
  );

  return <PickerStoreContext.Provider value={value}>{children}</PickerStoreContext.Provider>;
}

export function usePickerStore() {
  const context = useContext(PickerStoreContext);
  if (!context) {
    throw new Error("usePickerStore must be used within PickerStoreProvider");
  }
  return context;
}

