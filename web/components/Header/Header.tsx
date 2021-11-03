import { FC } from "react";
import Link from "next/link";
export const Header: FC = ({ children }) => {
  return (
    <>
      <header className="bg-red-900 text-white fixed top-0 left-0 w-full h-10 flex p-2 justify-between z-10">
        <div>
          <Link href="/">
            <a className="text-white">ETHvil Bank</a>
          </Link>
        </div>
        <div>{children}</div>
      </header>
      <div className="h-10"></div>
    </>
  );
};
