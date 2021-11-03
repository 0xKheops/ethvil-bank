import clsx from "clsx";
import { FC } from "react";
import { useSection } from "./SectionContext";
import { getTitleClassName } from "./sectionUtils";

type SectionTitleProps = {
  large?: boolean;
};

export const SectionTitle: FC<SectionTitleProps> = ({ large, children }) => {
  const { color } = useSection();
  return (
    <h3
      className={clsx(
        large ? "text-xl" : "text-l",
        "font-bold uppercase p-2  text-white text-center",
        getTitleClassName(color)
      )}
    >
      {children}
    </h3>
  );
};
