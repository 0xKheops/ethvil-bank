import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { getErrorMessage } from "../lib/getErrorMessage";
import useBlockRefresh from "./useBlockRefresh";
import useEvilBankContract from "./useEvilBankContract";

export const useWithdraw = () => {
  const evilBank = useEvilBankContract();

  const { chainId, account } = useWeb3React<Web3Provider>();

  const {
    data: withdrawable,
    error,
    mutate,
  } = useSWR(["withdrawable", chainId, account, evilBank.address], async () => {
    const withdrawableAmount = await evilBank.withdrawable(account);

    return withdrawableAmount;
  });

  useBlockRefresh(mutate);

  const [withdrawing, setWithdrawing] = useState(false);
  const [withdraError, setWithdrawError] = useState<string>();
  const withdraw = useCallback(async () => {
    setWithdrawError(undefined);
    setWithdrawing(true);

    try {
      const tx = await evilBank.withdraw();
      await tx.wait();
    } catch (err) {
      setWithdrawError(getErrorMessage(err));
    }
    setWithdrawing(false);
  }, [evilBank]);

  return {
    loading: !withdrawable && !error,
    withdrawable,
    error,
    withdraw,
    withdrawing,
    withdraError,
  };
};
