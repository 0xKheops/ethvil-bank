import { formatDistance } from "date-fns";
import { useMemo } from "react";
import { useEvilBankStatus } from "../../hooks/useEvilBankStatus";
import { useNetwork } from "../../hooks/useNetwork";
import { EtherscanLink } from "../EtherscanLink/EtherscanLink";

export const Explanations = () => {
  const network = useNetwork();
  const { status } = useEvilBankStatus("INFURA");
  const duration = useMemo(
    () =>
      status ? formatDistance(0, status.duration.toNumber() * 1000) : null,
    [status]
  );
  if (!status) return null;
  return (
    <div className="text-left inline-block px-4">
      <div className="mb-4 text-sm text-yellow-500">
        This application is a demo &amp; portfolio app, therefore it is only
        connected to the test networks, at least for now. You may obtain free
        ETH for {network.fullname} from a{" "}
        <a
          className="underline hover:text-yellow-400"
          href={`https://duckduckgo.com/?q=${network.name}+faucet`}
        >
          {network.name} faucet
        </a>
        .
      </div>
      <div>
        Contract <EtherscanLink type="Account" address={status.address} /> :
      </div>
      <ul className="list-disc pl-5">
        <li>
          Deposit at least 10% more than the previous director to become the
          director of the bank.
        </li>
        <li>
          If another person becomes the director within {duration}, you will be
          transfered your deposit back + 5% bonus. Owner of the contract also
          gets 1%.
        </li>
        <li>
          If noone becomes a director after you within {duration}, you will get
          about 95% of your deposit back.
        </li>
      </ul>
    </div>
  );
};
