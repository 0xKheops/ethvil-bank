import { parseEther } from "@ethersproject/units";

export const tryParseEther = (value: string) => {
  try {
    return parseEther(value);
  } catch (err) {}
};
