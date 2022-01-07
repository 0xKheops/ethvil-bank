import { FC } from "react";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { EtherscanLink } from "../EtherscanLink/EtherscanLink";
import { useCurrentGame } from "./CurrentGameContext";

export const CurrentGameBids: FC = () => {
  const { loading, error, events } = useCurrentGame();
  if (loading || error || !events) {
    return null;
  }

  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Director</th>
          <th className="text-right">Deposit</th>
        </tr>
      </thead>
      <tbody>
        {events.map((ev) => {
          return (
            <tr key={ev.timestamp}>
              <td>
                <EtherscanLink type="Transaction" address={ev.transactionHash}>
                  {new Date(ev.timestamp * 1000).toLocaleString()}
                </EtherscanLink>
              </td>
              <td className={ev.isCurrentAccount ? "text-green-500" : ""}>
                <EtherscanLink
                  type="Account"
                  address={ev.director}
                  color={ev.isCurrentAccount ? "green" : "white"}
                  withIcon
                />
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
