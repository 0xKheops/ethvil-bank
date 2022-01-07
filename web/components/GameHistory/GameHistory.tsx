import { useRouter } from "next/router";
import { useMemo } from "react";
import { Section } from "../Section/Section";
import { SectionContent } from "../Section/SectionContent";
import { SectionTitle } from "../Section/SectionTitle";
import { GameHistoryBids } from "./GameHistoryBids";
import { GameHistoryProvider } from "./GameHistoryContext";
import { GameHistoryInfo } from "./GameHistoryInfo";
import { GameHistoryLoader } from "./GameHistoryLoader";
import { GameHistoryTitle } from "./GameHistoryTitle";

export const GameHistory = () => {
  const router = useRouter();
  const gameId = useMemo(() => Number(router.query.id), [router.query.id]);
  console.log({ gameId });
  return (
    <GameHistoryProvider id={gameId}>
      <GameHistoryLoader>
        <Section>
          <SectionTitle large>
            <GameHistoryTitle />
          </SectionTitle>
          <SectionContent>
            <GameHistoryInfo />
          </SectionContent>
          <SectionTitle>Deposits</SectionTitle>
          <SectionContent>
            <GameHistoryBids />
          </SectionContent>
        </Section>
      </GameHistoryLoader>
    </GameHistoryProvider>
  );
};
