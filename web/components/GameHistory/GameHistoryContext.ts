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

type Props = {
  id: number;
};

const useGameHistoryProvider = ({ id }: Props) => {
  const { subgraph, chainId } = useNetwork();

  const {
    data = { games: [] },
    error,
    mutate,
  } = useSWR<{ games: ResponseGame[] }>(`game-history-${chainId}-${id}`, () =>
    request(
      subgraph,
      `{
    games(where:{id:${id}}) {
      id
      start
      end
      director
      bids(orderBy:timestamp, orderDirection:desc) {
        id
        amount
        director
        timestamp
      }
    }
  }`
    )
  );

  const { loading, game } = useMemo(
    () => ({
      loading: !data && !error,
      game: data.games[0],
    }),
    [data, error]
  );

  console.log(id, game);

  return {
    loading,
    error,
    game,
    mutate,
  };
};

export const [GameHistoryProvider, useGameHistory] = constate(
  useGameHistoryProvider
);
