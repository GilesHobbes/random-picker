"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PickerStoreProvider } from "@/components/PickerStoreProvider";
import { config } from "@/lib/wagmi";
import { WagmiProvider } from "wagmi";

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PickerStoreProvider>{children}</PickerStoreProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
