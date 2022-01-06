import { Drawer } from "../../Drawer/Drawer";
import { useNetworkPane } from "./NetworkPaneContext";
import { NetworkSelect } from "./NetworkSelect";
import { WalletInfos } from "./WalletInfos";

export const NetworkPane = () => {
  const { show, hidePane } = useNetworkPane();
  return (
    <Drawer title="Network" show={show} onDismiss={hidePane}>
      <div className="p-4">
        <div className="my-4">
          <label>Network : </label>
          <NetworkSelect />
        </div>
        <div className="my-4">
          <WalletInfos />
        </div>
      </div>
    </Drawer>
  );
};
