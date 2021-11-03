import { Web3Provider } from "@ethersproject/providers";
import { formatEther, parseEther } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import { BigNumberish } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { useETHPrice } from "../lib/ETHPriceContext";
import { formatEtherHuman } from "../lib/formatEtherHuman";
import { useGasPrice } from "../lib/GasPriceContext";
import { getErrorMessage } from "../lib/getErrorMessage";
import { tryParseEther } from "../lib/tryParseEther";
import useEvilBankContract from "./useEvilBankContract";

export const useBidDetails = (bid?: string, minPayment?: BigNumberish) => {
  const {
    loading: loadingETHPrice,
    error: errorETHPrice,
    value: ETHUSDPrice,
  } = useETHPrice();
  const {
    loading: loadingGasPrice,
    error: errorGasPrice,
    gasprice,
  } = useGasPrice();
  const evilBank = useEvilBankContract();
  const [debouncedBid] = useDebounce(bid, 200);

  const { isValid, isReady } = useMemo(() => {
    const _isValid = minPayment && tryParseEther(debouncedBid)?.gte(minPayment);
    const _isReady = _isValid && !loadingETHPrice && !loadingGasPrice;
    return { isValid: _isValid, isReady: _isReady };
  }, [debouncedBid, loadingETHPrice, loadingGasPrice, minPayment]);

  const [loadingEstimateGas, setLoadingEstimateGas] = useState(false);
  const [errorEstimateGas, setErrorEstimateGas] = useState<string>();
  const [estimateGas, setEstimateGas] = useState<BigNumberish>(0);
  const { library } = useWeb3React<Web3Provider>();
  useEffect(() => {
    if (!debouncedBid) return setEstimateGas(0);

    const fetchGas = async () => {
      setLoadingEstimateGas(true);
      try {
        setEstimateGas(
          await evilBank?.estimateGas.bid({
            value: parseEther(debouncedBid),
          })
        );
      } catch (err) {
        setErrorEstimateGas(getErrorMessage(err));
      }
      setLoadingEstimateGas(false);
    };

    if (isValid) fetchGas();
    else setEstimateGas(0);
  }, [debouncedBid, evilBank?.estimateGas, isValid, library.blockNumber]);

  const summary = useMemo(() => {
    if (!isReady)
      return {
        bidETH: "N/A",
        bidUSD: "N/A",
        estimateGasETH: "N/A",
        estimateGasUSD: "N/A",
        totalETH: "N/A",
        totalUSD: "N/A",
      };

    const valBidETH = parseEther(debouncedBid);
    const strBidETH = `${formatEtherHuman(valBidETH)} ETH`;
    const valBidUSD = Number(formatEther(valBidETH)) * ETHUSDPrice;
    const strBidUSD = `${valBidUSD.toFixed(2)} USD`;

    const valEstimateGasETH = gasprice.mul(estimateGas);
    const strEstimateGasETH = `${formatEtherHuman(valEstimateGasETH)} ETH`;
    const valEstimateGasUSD =
      Number(formatEther(valEstimateGasETH)) * ETHUSDPrice;
    const strEstimateGasUSD = `${valEstimateGasUSD.toFixed(2)} USD`;

    const valTotalETH = valBidETH.add(valEstimateGasETH);
    const strTotalETH = `${formatEtherHuman(valTotalETH)} ETH`;
    const valTotalUSD = Number(formatEther(valTotalETH)) * ETHUSDPrice;
    const strTotalUSD = `${valTotalUSD.toFixed(2)} USD`;

    const result = {
      bidETH: strBidETH,
      bidUSD: strBidUSD,
      estimateGasETH: strEstimateGasETH,
      estimateGasUSD: strEstimateGasUSD,
      totalETH: strTotalETH,
      totalUSD: strTotalUSD,
    };

    return result;
  }, [ETHUSDPrice, debouncedBid, estimateGas, gasprice, isReady]);

  return {
    isValid,
    loading: loadingEstimateGas || loadingGasPrice,
    error: errorETHPrice ?? errorEstimateGas ?? errorGasPrice,
    ...summary,
  };
};
