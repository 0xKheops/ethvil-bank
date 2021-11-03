import constate from "constate";
import { useGasPriceProvider } from "../hooks/useGasPriceProvider";

export const [GasPriceProvider, useGasPrice] = constate(useGasPriceProvider);
