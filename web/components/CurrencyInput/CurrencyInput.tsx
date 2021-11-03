import clsx from "clsx";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
} from "react";

type CurrencyInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  symbol: string;
  error?: boolean;
};

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ symbol, className, error, ...props }: CurrencyInputProps, ref) => {
    return (
      <div
        className={clsx(
          "overflow-hidden pr-0 relative flex w-full form-input rounded  bg-gray-700",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "focus-within:border-green-500 focus-within:ring-green-500",
          className
        )}
      >
        <input
          ref={ref}
          className=" w-full flex-grow outline-none bg-gray-700 text-white text-right"
          {...props}
        />
        <div className="flex flex-col justify-center">
          <span className="text-gray-400 mx-2 h-6 fill-current ">{symbol}</span>
        </div>
      </div>
    );
  }
);
CurrencyInput.displayName = "CurrencyInput";
