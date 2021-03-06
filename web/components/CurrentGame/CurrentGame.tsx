import { FC } from "react";
import { CurrentGameBids } from "./CurrentGameBids";
import { CurrentGameProvider } from "./CurrentGameContext";
import { CurrentGameBidForm } from "./CurrentGameBidForm";
import { CurrentGameInfo } from "./CurrentGameInfo";
import { CurrentGameTitle } from "./CurrentGameTitle";
import { Section } from "../Section/Section";
import { SectionContent } from "../Section/SectionContent";
import { SectionTitle } from "../Section/SectionTitle";
import { CurrentGameFinished } from "./CurrentGameFinished";
import { WithWalletConnected } from "../BlockchainConnection/WalletBlockchainConnection";
import { CurrentGameLoader } from "./CurrentGameLoader";

type CurrentGameProps = {};

export const CurrentGame: FC<CurrentGameProps> = () => {
  return (
    <CurrentGameProvider>
      <CurrentGameLoader>
        <Section>
          <SectionTitle large>
            <CurrentGameTitle />
          </SectionTitle>
          <SectionContent>
            <CurrentGameInfo />
          </SectionContent>
          <CurrentGameFinished />
          <SectionTitle>Become the new director</SectionTitle>
          <SectionContent>
            <WithWalletConnected>
              <CurrentGameBidForm />
            </WithWalletConnected>
          </SectionContent>
          <SectionTitle>Deposits</SectionTitle>
          <SectionContent>
            <CurrentGameBids />
          </SectionContent>
        </Section>
      </CurrentGameLoader>
    </CurrentGameProvider>
  );
};
