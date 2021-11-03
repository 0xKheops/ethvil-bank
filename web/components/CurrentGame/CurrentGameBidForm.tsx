import { formatEther, parseEther } from "@ethersproject/units";
import { BigNumber } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, SchemaOf } from "yup";
import { getErrorMessage } from "../../lib/getErrorMessage";
import { tryParseEther } from "../../lib/tryParseEther";
import useEvilBankContract from "../../hooks/useEvilBankContract";
import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { ActionButton } from "../Button/ActionButton";
import { CurrencyInput } from "../CurrencyInput/CurrencyInput";
import { CurrentGameBidDetails } from "./CurrentGameBidDetails";
import { useCurrentGame } from "./CurrentGameContext";

type BidFormData = {
  bid: string;
};

const getBidSchema = (minPayment: BigNumber): SchemaOf<BidFormData> =>
  object({
    bid: string()
      .required()
      .test(
        "is big number",
        "Failed parse the value",
        (value) => !Number.isNaN(value)
      )
      .test(
        "is sufficient",
        `Value must be greater or equal than ${
          minPayment ? formatEther(minPayment) : "null"
        }`,
        (value) => {
          return tryParseEther(value)?.gte(minPayment ?? 0);
        }
      ),
  });

export const CurrentGameBidForm = () => {
  const { minBid, mutate } = useCurrentGame();
  const evilBank = useEvilBankContract();

  const depositSchema = useMemo(() => getBidSchema(minBid), [minBid]);
  const resolver = useYupValidationResolver(depositSchema);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isValidating },
    reset,
    watch,
  } = useForm<BidFormData>({
    resolver,
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (minBid) {
      reset({
        bid: formatEther(minBid),
      });
    }
  }, [minBid, reset]);

  const [submitError, setSubmitError] = useState<string>();
  const onSubmit: SubmitHandler<BidFormData> = async (input) => {
    setSubmitError(undefined);
    try {
      const value = parseEther(input.bid);
      const tx = await evilBank.bid({ value });
      await tx.wait();
      await mutate();
    } catch (err) {
      setSubmitError(getErrorMessage(err));
    }
  };

  const cannotSubmit = useMemo(
    () => isValidating || isSubmitting || !isValid,
    [isSubmitting, isValid, isValidating]
  );

  const bid = watch("bid");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="w-full flex space-x-5 overflow-hidden">
          <CurrencyInput
            symbol={"ETH"}
            {...register("bid", { required: true })}
            id="bid"
            name="bid"
            autoComplete="off"
            className="flex-grow"
            error={Boolean(errors.bid?.message)}
          />
          <ActionButton
            working={isSubmitting}
            color="green"
            type="submit"
            disabled={cannotSubmit}
          >
            Deposit
          </ActionButton>
        </div>
        <div className="text-red-500">{errors.bid?.message ?? submitError}</div>
      </div>
      <div className="pt-4">
        <CurrentGameBidDetails bid={bid} minBid={minBid} />
      </div>
    </form>
  );
};
