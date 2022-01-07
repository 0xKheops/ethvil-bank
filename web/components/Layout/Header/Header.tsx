import { FC } from "react";
import Link from "next/link";
import { NetworkButton } from "../NetworkButton/NetworkButton";
import { NetworkPaneProvider } from "../NetworkPane/NetworkPaneContext";
import { NetworkPane } from "../NetworkPane/NetworkPane";

export const Header: FC = () => {
  return (
    <NetworkPaneProvider>
      <header className="bg-red-900 text-white fixed top-0 left-0 w-full h-10 flex justify-between z-10">
        <div className="p-2">
          <Link href="/">
            <a className="text-white">ETHvil Bank</a>
          </Link>
        </div>
        <NetworkButton />
      </header>
      <div className="h-10"></div>
      <NetworkPane />
    </NetworkPaneProvider>
  );
};
