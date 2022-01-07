import { Button } from "../Button/Button";
import { useWallet } from "../../lib/WalletContext";

const ConnectButton = () => {
  const {
    isWeb3Available,
    isMetaMaskInstalled,
    connecting,
    connect,
    startOnboarding,
  } = useWallet();

  return (
    <div>
      {isWeb3Available ? (
        <Button color="green" disabled={connecting} onClick={connect}>
          {isMetaMaskInstalled ? "Connect MetaMask" : "Connect Wallet"}
        </Button>
      ) : (
        <Button color="green" onClick={startOnboarding}>
          Install Metamask
        </Button>
      )}
    </div>
  );
};

export default ConnectButton;
