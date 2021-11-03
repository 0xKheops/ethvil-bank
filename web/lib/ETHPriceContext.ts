import constate from "constate";
import { useETHPriceProvider } from "../hooks/useETHPriceProvider";

export const [ETHPriceProvider, useETHPrice] = constate(useETHPriceProvider);
