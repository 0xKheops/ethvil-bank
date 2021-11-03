import { FC } from "react";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { shortenHex } from "../../lib/utils";
import { useCurrentGame } from "./CurrentGameContext";

export const CurrentGameBids: FC = () => {
  const { loading, error, events } = useCurrentGame();
  if (loading || error || !events) {
    console.log("rendering nothing", { loading, error, events });
    return null;
  }

  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Director</th>
          <th className="text-right">Bid</th>
        </tr>
      </thead>
      <tbody>
        {events.map((ev) => {
          return (
            <tr key={ev.timestamp}>
              <td>{new Date(ev.timestamp * 1000).toLocaleString()}</td>
              <td className={ev.isCurrentAccount ? "text-green-500" : ""}>
                {shortenHex(ev.director)}
              </td>
              <td className="text-right font-bold">
                {formatEtherHuman(ev.bid)} ETH
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
