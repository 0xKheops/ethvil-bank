import useSWR from "swr";
import type { ERC20 } from "../contracts/types";
import useBlockRefresh from "./useBlockRefresh";
import useTokenContract from "./useTokenContract";

function getTokenBalance(contract: ERC20) {
  return async (_: string, address: string) => {
    const balance = await contract.balanceOf(address);

    return balance;
  };
}

export default function useTokenBalance(
  address: string,
  tokenAddress: string,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenBalance", address, tokenAddress] : null,
    getTokenBalance(contract),
    {
      suspense,
    }
  );

  useBlockRefresh(result.mutate);

  return result;
}