import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import constate from "constate";
import useSWR from "swr";
import useEvilBankContract from "../../hooks/useEvilBankContract";

const useGamesHistoryProvider = () => {
  const evilBank = useEvilBankContract("INFURA");

  const { chainId } = useWeb3React<Web3Provider>("INFURA");
  const {
    data: games,
    error,
    mutate,
  } = useSWR(`gameends-${chainId}`, async () => {
    console.time("useEvilBankGameEnds");
    const filter = evilBank.filters.GameEnd();
    const events = await evilBank.queryFilter(filter);
    const result = (
      await Promise.all(
        events.map(async (e) => {
          const { timestamp } = await e.getBlock();
          const { gameId, director, amount } = e.args;
          return {
            gameId,
            director,
            amount,
            timestamp,
          };
        })
      )
    ).sort((ev1, ev2) => ev2.timestamp - ev1.timestamp);
    console.timeEnd("useEvilBankGameEnds");
    return result;
  });

  console.log({ error, games });

  return {
    loading: !games && !error,
    error,
    games,
    mutate,
  };
};

export const [GamesHistoryProvider, useGamesHistory] = constate(
  useGamesHistoryProvider
);
