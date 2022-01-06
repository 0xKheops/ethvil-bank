import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useWeb3React } from "@web3-react/core";
import { NetworkConnector } from "@web3-react/network-connector";
import { Fragment, useCallback } from "react";
import { networks } from "../../../lib/networks";

export const NetworkSelect = () => {
  const { chainId: currentChainId, connector } = useWeb3React("INFURA");

  const selectedNetwork = networks.find((n) => n.chainId === currentChainId);

  const handleChange = useCallback(
    (chainId) => {
      const networkConnector = connector as NetworkConnector;
      networkConnector.changeChainId(chainId);
    },
    [connector]
  );

  return (
    <Listbox value={currentChainId} onChange={handleChange}>
      <div className="relative mt-1">
        <Listbox.Button className="z-0 relative w-full py-2 pl-3 pr-10 text-left bg-gray-700 text-white rounded shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer">
          <span className="block truncate">{selectedNetwork.fullname}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="w-5 h-5" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="z-10 absolute w-full mt-1 overflow-auto text-base bg-gray-600 text-white rounded shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {networks.map(({ chainId, fullname }) => (
              <Listbox.Option
                key={chainId}
                className={({ active }) =>
                  `${active ? "bg-gray-500" : "text-white"}
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                }
                value={chainId}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate `}
                    >
                      {fullname}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
