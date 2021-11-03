import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import useEvilBankContract from "./useEvilBankContract";
import useBlockRefresh from "./useBlockRefresh";
import { BigNumber } from "ethers";

export const useEvilBankEvents = (gameId: BigNumber) => {
  const evilBank = useEvilBankContract();

  const { chainId, account } = useWeb3React<Web3Provider>();
  const { data, error, mutate } = useSWR(
    gameId ? ["EvilBankEvents", chainId, gameId?.toHexString()] : null,
    async () => {
      const filter = evilBank.filters.Bid(gameId);
      const events = await evilBank.queryFilter(filter);
      return (
        await Promise.all(
          events.map(async (e) => {
            const { director, bid } = e.args;
            const { timestamp } = await e.getBlock();
            return {
              gameId,
              director,
              bid,
              timestamp,
              isCurrentAccount: director === account,
            };
          })
        )
      ).sort((ev1, ev2) => ev2.timestamp - ev1.timestamp);
    }
  );

  useBlockRefresh(mutate);

  return {
    loading: !data && !error,
    error,
    events: data,
  };
};
