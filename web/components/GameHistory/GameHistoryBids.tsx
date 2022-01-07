import { FC } from "react";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { useWallet } from "../../lib/WalletContext";
import { EtherscanLink } from "../EtherscanLink/EtherscanLink";
import { useGameHistory } from "./GameHistoryContext";

export const GameHistoryBids: FC = () => {
  const { game } = useGameHistory();
  const { account } = useWallet();

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
        {game.bids.map((bid) => {
          return (
            <tr key={bid.timestamp}>
              <td>
                <EtherscanLink type="Transaction" address={bid.id}>
                  {new Date(Number(bid.timestamp) * 1000).toLocaleString()}
                </EtherscanLink>
              </td>
              <td className={bid.director === account ? "text-green-500" : ""}>
                <EtherscanLink
                  type="Account"
                  address={bid.director}
                  color={bid.director === account ? "green" : "white"}
                  withIcon
                />
              </td>
              <td className="text-right font-bold">
                {formatEtherHuman(bid.amount)} ETH
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
