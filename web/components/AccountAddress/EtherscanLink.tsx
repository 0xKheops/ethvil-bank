import { useWeb3React } from "@web3-react/core";
import clsx from "clsx";
import { FC, useMemo } from "react";
import { AddressType, formatEtherscanLink, shortenHex } from "../../lib/utils";
import JazzIcon, { jsNumberForAddress } from "react-jazzicon";
import useENSName from "../../hooks/useENSName";

type EtherscanLinkProps = {
  address: string;
  color?: "white" | "green";
  type: AddressType;
  className?: string;
  withIcon?: boolean;
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
  withIcon,
  children,
}) => {
  const { chainId } = useWeb3React("INFURA");

  const ens = useENSName(address);

  const href = useMemo(
    () => formatEtherscanLink(type, chainId, address),
    [address, chainId, type]
  );
  const cn = useMemo(
    () => clsx(getClassName(color), className),
    [className, color]
  );
  const { seed, content } = useMemo(
    () => ({
      seed: jsNumberForAddress(address),
      content: children ?? (ens || shortenHex(address)),
    }),
    [address, children, ens]
  );
  console.log({ ens });
  if (!chainId) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn}>
      {withIcon && (
        <span className="mr-1 align-middle">
          <JazzIcon diameter={14} seed={seed} />
        </span>
      )}
      {content}
    </a>
  );
};
