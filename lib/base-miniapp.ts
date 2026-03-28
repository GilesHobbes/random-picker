import type { Hex } from "viem";

export const BASE_APP_ID = "69c7970246489d192593bdd0";
export const BASE_BUILDER_CODE = "bc_y36qskym";
export const BUILDER_CODE_SUFFIX =
  "0x62635f79333671736b796d0b0080218021802180218021802180218021" as Hex;

export function appendBuilderCodeSuffix(data: Hex) {
  return `${data}${BUILDER_CODE_SUFFIX.slice(2)}` as Hex;
}
