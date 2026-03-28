"use client";

import { injected } from "wagmi/connectors";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function shortAddress(address?: string) {
  if (!address) return "Connect Wallet";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button type="button" className="btn btn-secondary wallet-button" onClick={() => disconnect()}>
        <span className="icon-dot" />
        {shortAddress(address)}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-primary wallet-button"
      onClick={() => connect({ connector: injected() })}
      disabled={isPending}
    >
      {isPending ? "Opening Wallet" : "Connect Wallet"}
    </button>
  );
}

