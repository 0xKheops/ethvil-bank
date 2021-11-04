import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import useEvilBankContract from "./useEvilBankContract";
import { useEffect } from "react";

export const useEvilBankStatus = (key?: string) => {
  const evilBank = useEvilBankContract(key);

  const { chainId, account } = useWeb3React<Web3Provider>(key);
  const { data, error, mutate } = useSWR(
    `Status${chainId}${account}`,
    async () => {
      console.time("useEvilBankStatus");
      const [gameId, director, currentBid, endsAt, running, minBid] =
        await Promise.all([
          evilBank.gameId(),
          evilBank.director(),
          evilBank.currentBid(),
          evilBank.endsAt(),
          evilBank.running(),
          evilBank.minBid(),
        ]);

      console.timeEnd("useEvilBankStatus");

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

  // refreshes the status upon any event
  useEffect(() => {
    const filter1 = evilBank.filters.Bid();
    const filter3 = evilBank.filters.GameStart();
    const handler = () => mutate();

    evilBank.on(filter1, handler);
    evilBank.on(filter3, handler);
    return () => {
      evilBank.off(filter1, handler);
      evilBank.off(filter3, handler);
    };
  }, [evilBank, mutate]);

  return {
    loading: !data && !error,
    error,
    status: data,
    mutate,
  };
};
