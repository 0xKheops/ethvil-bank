import EvilBank_ABI from "../contracts/EvilBank.json";
import { EvilBank } from "../contracts/types";
import useContract from "./useContract";

export default function useEvilBankContract() {
  return useContract<EvilBank>(
    process.env.NEXT_PUBLIC_EVILBANK_ADDRESS,
    EvilBank_ABI
  );
}
