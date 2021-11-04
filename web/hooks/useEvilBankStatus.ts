import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import useEvilBankContract from "./useEvilBankContract";
import useBlockRefresh from "./useBlockRefresh";

export const useEvilBankStatus = () => {
  const evilBank = useEvilBankContract();

  const { chainId, account } = useWeb3React<Web3Provider>();
  const { data, error, mutate } = useSWR(
    ["EvilBankStatus", chainId, account],
    async () => {
      //console.time("useEvilBankStatus");
      const [gameId, director, currentBid, endsAt, running, minBid] =
        await Promise.all([
          evilBank.gameId(),
          evilBank.director(),
          evilBank.currentBid(),
          evilBank.endsAt(),
          evilBank.running(),
          evilBank.minBid(),
        ]);

      // console.timeEnd("useEvilBankStatus");

      return {
        gameId,
        director,
        currentBid,
        endsAt,
        running,
        minBid,
      };
    }
  );

  useBlockRefresh(mutate);

  return {
    loading: !data && !error,
    error,
    status: data,
    mutate,
  };
};
