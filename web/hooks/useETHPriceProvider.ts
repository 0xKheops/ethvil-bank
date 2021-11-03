import { useMemo } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { getErrorMessage } from "../lib/getErrorMessage";

export const useETHPriceProvider = () => {
  const {
    data,
    error: reqError,
    mutate,
  } = useSWR<{ USD: string }>(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
    fetcher,
    {
      refreshInterval: 60000,
    }
  );

  const { loading, error, value } = useMemo(
    () => ({
      loading: !data && !reqError,
      error: getErrorMessage(reqError),
      value: data ? Number(data.USD) : undefined,
    }),
    [data, reqError]
  );

  return {
    loading,
    error,
    value,
    mutate,
  };
};
