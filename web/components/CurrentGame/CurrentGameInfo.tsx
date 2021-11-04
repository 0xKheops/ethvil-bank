import { useCurrentGame } from "./CurrentGameContext";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { TimeLeft } from "../TimeLeft/TimeLeft";
import { useMemo } from "react";

export const CurrentGameInfo = () => {
  const { gameId, endsAt, currentBid } = useCurrentGame();
  const { target, isFinished } = useMemo(() => {
    const _target = endsAt ? new Date(endsAt.toNumber() * 1000) : null;
    return {
      target: _target,
      isFinished: _target?.valueOf() < Date.now(),
    };
  }, [endsAt]);
  if (!gameId) return <>Loading...</>;
  return (
    <table className="table-auto w-full text-left">
      <tbody>
        <tr>
          <td>Current bid</td>
          <td className="text-right font-bold">
            {formatEtherHuman(currentBid)} ETH
          </td>
        </tr>
        <tr>
          <td>Time left</td>
          <td className="text-right font-bold">
            <TimeLeft target={target} />
          </td>
        </tr>
        {isFinished && (
          <tr>
            <td colSpan={2} className="text-green-500 text-center">
              This game beeing finished, next bid will start a new game !
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
