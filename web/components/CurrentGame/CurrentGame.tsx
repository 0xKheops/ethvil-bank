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
import { Connected } from "../Connected/Connected";

type CurrentGameProps = {};

export const CurrentGame: FC<CurrentGameProps> = () => {
  return (
    <CurrentGameProvider>
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
          <Connected>
            <CurrentGameBidForm />
          </Connected>
        </SectionContent>
        <SectionTitle>Bids</SectionTitle>
        <SectionContent>
          <CurrentGameBids />
        </SectionContent>
      </Section>
    </CurrentGameProvider>
  );
};
