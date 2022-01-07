import { useRouter } from "next/router";
import { useEffect } from "react";
import { Drawer } from "../../Drawer/Drawer";
import { Navigation } from "./Navigation";
import { useNavigationPane } from "./NavigationPaneContext";

export const NavigationPane = () => {
  const { show, hidePane } = useNavigationPane();
  const router = useRouter();

  useEffect(() => {
    hidePane();
  }, [hidePane, router.pathname]);

  return (
    <Drawer title="ETHvil Bank" side="left" show={show} onDismiss={hidePane}>
      <div className="p-4">
        <Navigation />
      </div>
    </Drawer>
  );
};
