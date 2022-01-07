import { FC } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { default as clsx } from "clsx";
type DrawerProps = {
  side?: "left" | "right";
  show?: boolean;
  onDismiss?: () => void;
  title?: string;
};

export const Drawer: FC<DrawerProps> = ({
  show = false,
  side = "right",
  children,
  title,
  onDismiss,
}) => {
  return (
    <Transition show={show}>
      {/* Background overlay */}
      <Transition.Child
        data-testid="sidepanel-overlay"
        className={clsx(
          "fixed z-40 top-0 left-0 w-full h-full bg-gray-900/50",
          onDismiss ? "cursor-pointer" : ""
        )}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={onDismiss}
      ></Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        data-testid="sidepanel-panel"
        className={clsx(
          "z-50 max-w-full shadow-lg fixed top-0 h-screen bg-gray-900 flex flex-col w-full sm:w-96",
          side === "left" ? "left-0" : "right-0"
        )}
        enter="transition ease-in-out duration-300 transform"
        enterFrom={side === "left" ? "-translate-x-full" : "translate-x-full"}
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo={side === "left" ? "-translate-x-full" : "translate-x-full"}
      >
        <div className="flex w-full h-10 bg-red-900 text-white">
          <div className="flex-grow px-2 flex flex-col h-full justify-center">
            <h3 data-testid="sidepanel-title" className="text-xl">
              {title}
            </h3>
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="transition h-10 p-2 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-20"
            >
              <XIcon className="w-6 h-6" />
            </button>
          )}
        </div>
        <div className="flex-grow overflow-y-hidden">{children}</div>
      </Transition.Child>
    </Transition>
  );
};
