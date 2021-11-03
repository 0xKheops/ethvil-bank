import constate from "constate";

export type SectionColor = "red" | "gray";

type SectionContextProps = {
  color: SectionColor;
};

const useSectionProvider = ({ color }: SectionContextProps) => {
  return { color };
};

export const [SectionProvider, useSection] = constate(useSectionProvider);
