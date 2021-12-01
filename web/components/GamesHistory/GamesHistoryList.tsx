import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { ConnectSpinner } from "../Spinner/ConnectSpinner";
import { useGamesHistory } from "./GamesHistoryContext";

export const GamesHistoryList = () => {
  const { games, loading, error } = useGamesHistory();

  console.log("history");

  if (loading) return <ConnectSpinner />;

  if (error) return <div>{error.toString()}</div>;

  return (
    <div>
      {games?.map(({ gameId, timestamp, director, amount }) => (
        <div key={gameId.toNumber()}>
          {gameId.toNumber()} - ended on{" "}
          {new Date(timestamp * 1000).toLocaleString()} -{" "}
          {formatEtherHuman(amount)} ETH
        </div>
      ))}
    </div>
  );
};
