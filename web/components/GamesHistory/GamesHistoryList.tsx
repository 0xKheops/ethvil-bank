import { useRouter } from "next/router";
import { useCallback } from "react";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { EtherscanLink } from "../EtherscanLink/EtherscanLink";
import { ConnectSpinner } from "../Spinner/ConnectSpinner";
import { useGamesHistory } from "./GamesHistoryContext";

export const GamesHistoryList = () => {
  const { games, loading, error } = useGamesHistory();
  const router = useRouter();

  const handleRowClick = useCallback(
    (id: string) => () => {
      router.push(`/games/${id}`);
    },
    [router]
  );

  if (loading) return <ConnectSpinner />;

  if (error) return <div>{error.toString()}</div>;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="pt-4 py-2 pl-4 text-left">Game</th>
          <th className="pt-4 py-2 text-right">End</th>
          <th className="pt-4 py-2 text-right">Amount (ETH)</th>
          <th className="pt-4 py-2 pr-4 text-right">Winner</th>
        </tr>
      </thead>
      <tbody>
        {games?.map(({ id, end, director, amount }) => (
          <tr
            onClick={handleRowClick(id)}
            key={id}
            className="cursor-pointer hover:bg-gray-600/80"
          >
            <td className="py-2 pl-4 text-left">{id}</td>
            <td className="py-2 text-right">
              {end
                ? new Date(Number(end) * 1000).toLocaleString("default", {
                    dateStyle: "short",
                  })
                : "In progress"}
            </td>
            <td className="py-2 text-right">{formatEtherHuman(amount)}</td>
            <td className="py-2 pr-4 text-right">
              <EtherscanLink type="Account" address={director} withIcon />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
