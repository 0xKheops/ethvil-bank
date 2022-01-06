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
import { WalletBlockchainConnection } from "../BlockchainConnection/WalletBlockchainConnection";
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
            <WalletBlockchainConnection>
              <CurrentGameBidForm />
            </WalletBlockchainConnection>
          </SectionContent>
          <SectionTitle>Bids</SectionTitle>
          <SectionContent>
            <CurrentGameBids />
          </SectionContent>
        </Section>
      </CurrentGameLoader>
    </CurrentGameProvider>
  );
};
