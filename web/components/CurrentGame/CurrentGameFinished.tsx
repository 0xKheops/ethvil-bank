import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { FC, useCallback, useState } from "react";
import useEvilBankContract from "../../hooks/useEvilBankContract";
import { getErrorMessage } from "../../lib/getErrorMessage";
import { ActionButton } from "../Button/ActionButton";
import { SectionContent } from "../Section/SectionContent";
import { SectionTitle } from "../Section/SectionTitle";
import { useCurrentGame } from "./CurrentGameContext";

export const CurrentGameFinished: FC = () => {
  const evilBank = useEvilBankContract();
  const { account } = useWeb3React<Web3Provider>();
  const { running, endsAt, director } = useCurrentGame();

  const [ending, setEnding] = useState(false);
  const [endError, setEndError] = useState<string>();

  const endGame = useCallback(async () => {
    setEndError(undefined);
    setEnding(true);
    try {
      const tx = await evilBank.end();
      await tx.wait();
    } catch (err) {
      setEndError(getErrorMessage(err));
    }
    setEnding(false);
  }, [evilBank]);

  if (
    account !== director ||
    !running ||
    endsAt?.toNumber() * 1000 > Date.now()
  )
    return null;

  return (
    <>
      <SectionTitle>Manual ending</SectionTitle>
      <SectionContent>
        <div>
          As the last director of this game, you may end it manually and receive
          your deposit right away. This action will cost some gas.
          <br />
          You may also wait for someone to start the next game to receive your
          funds automatically.
        </div>
        <div className="text-center">
          <ActionButton
            onClick={endGame}
            working={ending}
            color="green"
            compact
          >
            End game
          </ActionButton>
        </div>
        <div className="text-red-500">{endError}</div>
      </SectionContent>
    </>
  );
};
