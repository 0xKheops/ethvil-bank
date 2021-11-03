import { HeartIcon } from "@heroicons/react/solid";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="h-30 bg-gray-900 py-4 flex">
      <div className="w-10"></div>
      <div className="text-center flex-grow">
        Built with <HeartIcon className="inline text-red-500 w-5 h-5" /> by
        Arnault Nouvel
      </div>
      <div className="w-10 text-white">
        <a href="https://github.com/ArnaultNouvel/ethvil-bank">
          <FaGithub className=" w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};
