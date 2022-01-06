import EvilBank_ABI from "../contracts/EvilBank.json";
import { EvilBank } from "../contracts/types";
import useContract from "./useContract";
import { useNetwork } from "./useNetwork";

export default function useEvilBankContract(key?: string) {
  const network = useNetwork();
  return useContract<EvilBank>(network.contract, EvilBank_ABI, key);
}
