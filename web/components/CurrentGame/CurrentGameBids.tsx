import { FC } from "react";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { ButtonSpinner } from "../Button";
import { EtherscanLink } from "../EtherscanLink/EtherscanLink";
import { useCurrentGame } from "./CurrentGameContext";

const BidsLoader = () => (
  <div className="w-full text-center ">
    <div className="inline-flex gap-2 text-yellow-500">
      <span>
        <ButtonSpinner />
      </span>
      <span>Loading...</span>
    </div>
  </div>
);

export const CurrentGameBids: FC = () => {
  const { loading, error, events } = useCurrentGame();

  if (loading) return <BidsLoader />;

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
