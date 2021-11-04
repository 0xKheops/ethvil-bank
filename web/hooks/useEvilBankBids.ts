import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import useEvilBankContract from "./useEvilBankContract";
import { BigNumber } from "ethers";
import { useEffect } from "react";

export const useEvilBankBids = (gameId: BigNumber, key?: string) => {
  const evilBank = useEvilBankContract(key);

  const { account } = useWeb3React();
  const { chainId } = useWeb3React<Web3Provider>(key);
  const { data, error, mutate } = useSWR(
    gameId ? `bids-${chainId}-${gameId?.toHexString()}` : null,
    async () => {
      console.time("useEvilBankBids");
      const filter = evilBank.filters.Bid(gameId);
      const events = await evilBank.queryFilter(filter);
      const result = (
        await Promise.all(
          events.map(async (e) => {
            const { transactionHash } = e;
            const { director, bid } = e.args;
            const { timestamp } = await e.getBlock();
            return {
              transactionHash,
              gameId,
              director,
              bid,
              timestamp,
              isCurrentAccount: director === account,
            };
          })
        )
      ).sort((ev1, ev2) => ev2.timestamp - ev1.timestamp);
      console.timeEnd("useEvilBankBids");
      return result;
    }
  );

  useEffect(() => {
    const filter = evilBank.filters.Bid(gameId);
    const handler = () => mutate();

    evilBank.on(filter, handler);
    return () => {
      evilBank.off(filter, handler);
    };
  }, [evilBank, gameId, mutate]);

  return {
    loading: !data && !error,
    error,
    events: data,
    mutate,
  };
};
