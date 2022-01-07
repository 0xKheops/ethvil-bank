import { FC } from "react";
import Link from "next/link";
import { NetworkButton } from "./NetworkButton";
import { NetworkPaneProvider } from "../NetworkPane/NetworkPaneContext";
import { NetworkPane } from "../NetworkPane/NetworkPane";
import { NavigationPaneProvider } from "../NavigationPane/NavigationPaneContext";
import { NavMenuButton } from "./NavMenuButton";
import { NavigationPane } from "../NavigationPane/NavigationPane";

export const Header: FC = () => {
  return (
    <NavigationPaneProvider>
      <NetworkPaneProvider>
        <header className="bg-red-900 text-white fixed top-0 left-0 w-full h-10 flex justify-between z-10 shadow-xl">
          <div className="flex">
            <NavMenuButton />
            <div className="p-2">
              <Link href="/">
                <a className="text-white">ETHvil Bank</a>
              </Link>
            </div>
          </div>
          <NetworkButton />
        </header>
        <div className="h-10"></div>
        <NetworkPane />
        <NavigationPane />
      </NetworkPaneProvider>
    </NavigationPaneProvider>
  );
};
