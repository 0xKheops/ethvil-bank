import { BigNumberish } from "ethers";
import { FC } from "react";
import { useBidDetails as useBidDetails } from "../../hooks/useDepositDetails";

type CurrentGameBidDetailsProps = {
  bid: string;
  minBid: BigNumberish;
};

export const CurrentGameBidDetails: FC<CurrentGameBidDetailsProps> = ({
  bid,
  minBid,
}) => {
  const details = useBidDetails(bid, minBid);

  return (
    <div className="">
      <table className="w-full table-auto font-bold text-left ">
        <tbody>
          <tr>
            <td className="pr-2 font-normal">Bid</td>
            <td className="px-2 text-right w-40">{details.bidETH}</td>
            <td className="pl-2 text-right w-40 opacity-50">
              {details.bidUSD}
            </td>
          </tr>
          <tr>
            <td className="pr-2 font-normal">Estimated gas</td>
            <td className="px-2 text-right">{details.estimateGasETH}</td>
            <td className="pl-2 text-right opacity-50">
              {details.estimateGasUSD}
            </td>
          </tr>
          <tr>
            <td className="pr-2">Total cost</td>
            <td className="px-2 text-right">{details.totalETH}</td>
            <td className="pl-2 text-right opacity-50">{details.totalUSD}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
