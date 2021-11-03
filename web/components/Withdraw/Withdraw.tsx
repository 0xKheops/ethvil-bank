import { FC } from "react";
import { formatEtherHuman } from "../../lib/formatEtherHuman";
import { useWithdraw } from "../../hooks/useWithdraw";
import { ActionButton } from "../Button/ActionButton";
import { Section } from "../Section/Section";
import { SectionTitle } from "../Section/SectionTitle";
import { SectionContent } from "../Section/SectionContent";

export const Withdraw: FC = () => {
  const { loading, error, withdrawable, withdraw, withdrawing } = useWithdraw();

  if (error) console.log(error);

  if (loading || withdrawable.eq(0)) return null;

  return (
    <>
      <Section color="gray">
        <SectionTitle large>Withdraw</SectionTitle>
        <SectionContent>
          <div className="flex w-full">
            <div className="flex-grow text-left">
              {withdrawable?.gt(0) ? (
                <div>
                  You may withdraw {formatEtherHuman(withdrawable)} ETH.
                </div>
              ) : (
                <div>You may not withdraw any ETH at this time.</div>
              )}
              <div className="text-red-500"></div>
            </div>
            <div>
              <ActionButton
                color={withdrawable?.gt(0) ? "green" : "gray"}
                working={withdrawing}
                onClick={withdraw}
              >
                Withdraw
              </ActionButton>
            </div>
          </div>
        </SectionContent>
      </Section>
    </>
  );
};
