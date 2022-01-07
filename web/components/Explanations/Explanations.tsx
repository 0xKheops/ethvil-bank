import { useNetwork } from "../../hooks/useNetwork";
import { EtherscanLink } from "../AccountAddress/EtherscanLink";

export const Explanations = () => {
  const network = useNetwork();
  if (!network) return null;
  return (
    <div className="text-left inline-block px-4">
      <div className="mb-4 text-sm text-yellow-500">
        This application is a demo &amp; portfolio app, therefore it is only
        connected to the Ropsten Test Network, for now. You may obtain free ETH
        for this network from a{" "}
        <a
          className="underline hover:text-yellow-400"
          href="https://duckduckgo.com/?q=ropsten+faucet"
        >
          Ropsten faucet
        </a>
        .
      </div>
      <div>
        Contract <EtherscanLink type="Account" address={network.contract} /> :
      </div>
      <ul className="list-disc pl-5">
        <li>
          Bid at least 10% more than the previous director to become the
          director of the bank.
        </li>
        <li>
          If another person becomes the director within 5 minutes, you will
          receive your bid + 5% bonus. Owner of the contract also gets 1%.
        </li>
        <li>
          If noone becomes a director after you within 5 minutes, you will get
          at least 95% of your bid back.
        </li>
      </ul>
    </div>
  );
};
