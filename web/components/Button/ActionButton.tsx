import clsx from "clsx";
import { FC } from "react";
import { Button, ButtonProps } from "./Button";
import { ButtonSpinner } from "./ButtonSpinner";

type ActionButtonProps = ButtonProps & {
  working?: boolean;
};

export const ActionButton: FC<ActionButtonProps> = ({
  working = false,
  children,
  disabled,
  ...props
}) => {
  return (
    <Button
      role="button"
      {...props}
      className="relative"
      disabled={disabled || working}
    >
      <span className={working ? "invisible" : "visible"}>{children}</span>
      {working && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ButtonSpinner className={clsx("w-5 h-5")} />
        </div>
      )}
    </Button>
  );
};
