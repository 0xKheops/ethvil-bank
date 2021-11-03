import clsx from "clsx";
import { FC, useMemo } from "react";

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "color"
  > {
  color?: "blue" | "green" | "pink" | "red" | "yellow" | "white" | "gray";
  compact?: boolean;
}

const getColorClass = (color: string, disabled: boolean): string => {
  switch (color) {
    case "blue":
      return clsx(
        "text-blue-400 border-blue-600 focus-visible:border-blue-600",
        !disabled && "hover:bg-blue-600 hover:text-blue-200"
      );
    case "green":
      return clsx(
        "text-green-400 border-green-600 focus-visible:border-green-600",
        !disabled && "hover:bg-green-600 hover:text-green-200"
      );
    case "pink":
      return clsx(
        "text-pink-400 border-pink-600 focus-visible:border-pink-600",
        !disabled && "hover:bg-pink-600 hover:text-pink-200"
      );
    case "red":
      return clsx(
        "text-red-500 border-red-600 focus-visible:border-red-600",
        !disabled && "hover:bg-red-600 hover:text-red-200"
      );
    case "yellow":
      return clsx(
        "text-yellow-500 border-yellow-500 focus-visible:border-yellow-600",
        !disabled && "hover:bg-yellow-500 hover:text-yellow-200"
      );
    case "white":
      return clsx(
        "border-white-600 text-white focus-visible:border-white-600",
        !disabled && "hover:bg-gray-200 hover:text-gray-700"
      );
    case "gray":
    default:
      return clsx(
        "text-gray-300 border-gray-400 focus-visible:border-gray-400",
        !disabled && "hover:bg-gray-200 hover:text-gray-700"
      );
  }
};

export const Button: FC<ButtonProps> = ({
  color = "white",
  compact = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const colorClassName = useMemo(
    () => getColorClass(color, disabled),
    [color, disabled]
  );

  return (
    <button
      disabled={disabled}
      className={clsx(
        colorClassName,
        "uppercase border-2 rounded-lg px-3 py-2 cursor-pointer disabled:opacity-50 disabled:hover:bg-transparent disabled:cursor-default",
        compact ? "py-1" : "py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
