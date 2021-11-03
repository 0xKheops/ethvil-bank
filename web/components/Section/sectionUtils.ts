import { SectionColor } from "./SectionContext";

export const getTitleClassName = (color: SectionColor) => {
  switch (color) {
    case "red":
      return "bg-red-800";
    default:
      return "bg-gray-500";
  }
};

export const getContainerClassName = (color: SectionColor) => {
  switch (color) {
    case "red":
      return "border-red-800";
    default:
      return "border-gray-500";
  }
};
