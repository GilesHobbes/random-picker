import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
});

// TODO(builder-code): replace the placeholder suffix below with the official Base builder code data suffix.
// Example target shape:
// export const BUILDER_CODE_SUFFIX = "0x...";
export const BUILDER_CODE_SUFFIX = "TODO_REPLACE_WITH_BASE_BUILDER_CODE_SUFFIX";

