import { AccountAddress } from "../AccountAddress/AccountAddress";

export const Explanations = () => (
  <div className="text-left inline-block p-4">
    <h1
      className="font-bold text-6xl mb-10 text-center text-red-600"
      style={{ fontFamily: "Nosifer" }}
    >
      ETHvil Bank
    </h1>
    <div className="my-4 text-yellow-500">
      This application is a demo &amp; portfolio app, therefore it is only
      connected to the Ropsten Test Network, for now.
    </div>
    <div>
      Contract{" "}
      <AccountAddress address={process.env.NEXT_PUBLIC_EVILBANK_ADDRESS} /> :
    </div>
    <ul className="list-disc pl-5">
      <li>
        Bid at least 10% more than the previous director to become the director
        of the bank.
      </li>
      <li>
        If another person becomes the director within 5 minutes, you will
        receive your bid + 5% bonus. Owner of the contract also gets 1%.
      </li>
      <li>
        If noone becomes a director after you within 5 minutes, you will get at
        least 95% of your bid back.
      </li>
    </ul>
  </div>
);
