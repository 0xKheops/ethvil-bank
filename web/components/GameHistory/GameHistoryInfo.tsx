import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { EtherscanLink } from "../EtherscanLink/EtherscanLink";
import { useGameHistory } from "./GameHistoryContext";

export const GameHistoryInfo = () => {
  const { game } = useGameHistory();
  return (
    <table className="table-auto w-full text-left">
      <tbody>
        <tr>
          <td>Winner</td>
          <td className="text-right font-bold">
            <EtherscanLink type="Account" address={game.director} withIcon />
          </td>
        </tr>
        <tr>
          <td>Last deposit</td>
          <td className="text-right font-bold">
            {formatEtherHuman(game.bids[0].amount)} ETH
          </td>
        </tr>
        <tr>
          <td>Start</td>
          <td className="text-right font-bold">
            {new Date(Number(game.start) * 1000).toLocaleString()}
          </td>
        </tr>
        <tr>
          <td>End</td>
          <td className="text-right font-bold">
            {game.end
              ? new Date(Number(game.end) * 1000).toLocaleString()
              : "IN PROGRESS"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
