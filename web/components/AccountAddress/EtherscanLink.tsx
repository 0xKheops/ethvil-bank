import { useWeb3React } from "@web3-react/core";
import clsx from "clsx";
import { FC, useMemo } from "react";
import { formatEtherscanLink, shortenHex } from "../../lib/utils";

type EtherscanLinkProps = {
  address: string;
  color?: "white" | "green";
  type: "Account" | "Transaction";
  className?: string;
};

const getClassName = (color: "white" | "green" = "white") => {
  if (color === "green") return "underline text-green-500 hover:text-green-400";
  else return "underline text-gray-200 hover:text-gray-100";
};

export const EtherscanLink: FC<EtherscanLinkProps> = ({
  address,
  color,
  type,
  className,
  children,
}) => {
  const { chainId } = useWeb3React("INFURA");
  const href = useMemo(
    () => formatEtherscanLink(type, [chainId, address]),
    [address, chainId, type]
  );
  const cn = useMemo(
    () => clsx(getClassName(color), className),
    [className, color]
  );
  const content = useMemo(
    () => children ?? shortenHex(address),
    [address, children]
  );
  if (!chainId) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn}>
      {content}
    </a>
  );
};
