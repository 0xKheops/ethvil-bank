import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigationPane } from "../NavigationPane/NavigationPaneContext";

export const NavMenuButton = () => {
  const { showPane, hidePane, show } = useNavigationPane();

  return (
    <button
      className="w-10 h-10 p-2 hover:bg-white/10"
      onClick={show ? hidePane : showPane}
    >
      {show && <XIcon className="text-white" />}
      {!show && <MenuIcon className="text-white" />}
    </button>
  );
};
