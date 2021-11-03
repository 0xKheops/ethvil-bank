import clsx from "clsx";
import { FC } from "react";
import { SectionColor, SectionProvider } from "./SectionContext";
import { getContainerClassName } from "./sectionUtils";

type SectionProps = {
  color?: SectionColor;
};

export const Section: FC<SectionProps> = ({ color = "red", children }) => (
  <SectionProvider color={color}>
    <div
      className={clsx(
        "relative sm:border-2 inline-block rounded w-full",
        getContainerClassName(color)
      )}
    >
      <div className="absolute bg-gray-900 w-full h-full opacity-70 z-[-10]"></div>
      {children}
    </div>
  </SectionProvider>
);
