export const RANDOM_PICKER_CONTRACT = {
  address: "0x72da052f624a5a75556f59e3fe227e5fac84fc6e" as const,
  abi: [
    {
      type: "function",
      name: "pick",
      stateMutability: "view",
      inputs: [
        { name: "seed", type: "uint256" },
        { name: "max", type: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256" }],
    },
  ],
};

