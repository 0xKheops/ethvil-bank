import { request } from "graphql-request";
import constate from "constate";
import useSWR from "swr";
import { useMemo } from "react";
import { useNetwork } from "../../hooks/useNetwork";

type ResponseBid = {
  id: string;
  director: string;
  amount: string;
  timestamp: string;
};
type ResponseGame = {
  id: string;
  start: string;
  end: string;
  bids: ResponseBid[];
  director: string;
};

const useGamesHistoryProvider = () => {
  const { subgraph, chainId } = useNetwork();

  const {
    data = { games: [] },
    error,
    mutate,
  } = useSWR<{ games: ResponseGame[] }>(`games-history-${chainId}`, () =>
    request(
      subgraph,
      `{
    games(orderBy:id, orderDirection:desc) {
      id
      start
      end
      director
      bids(orderBy:timestamp, orderDirection:desc, first:1) {
        id
        amount
        director
        timestamp
      }
    }
  }`
    )
  );

  const { loading, games } = useMemo(
    () => ({
      loading: !data && !error,
      games: data.games.map(({ id, director, end, bids }) => ({
        id,
        director,
        end,
        amount: bids[0].amount,
      })),
    }),
    [data, error]
  );

  return {
    loading,
    error,
    games,
    mutate,
  };
};

export const [GamesHistoryProvider, useGamesHistory] = constate(
  useGamesHistoryProvider
);
