import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";

type NavLinkProps = {
  href: string;
};

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const selected = useMemo(
    () => router.pathname === href,
    [router.pathname, href]
  );
  return (
    <Link passHref href={href}>
      <a
        className={clsx(
          "p-2 rounded my-1",
          selected ? "bg-gray-700 cursor-default" : "hover:bg-gray-600"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav className="flex flex-col">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/games">Games history</NavLink>
      <NavLink href="/admin">Admin</NavLink>
    </nav>
  );
};
