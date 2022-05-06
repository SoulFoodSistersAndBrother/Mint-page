import { useEffect, useState } from "react";
import { useWeb3Context } from "../../hooks";
import { DEFAULT_NETWORK } from "../../constants";
import "./style.css";

function ConnectButton() {
    const {
        connect,
        disconnect,
        connected,
        web3,
        providerChainID,
        checkWrongNetwork,
    } = useWeb3Context();
    const [isConnected, setConnected] = useState(connected);

    let buttonText = "Connect Wallet";
    let clickFunc: any = connect;
    let buttonStyle = {};

    if (isConnected) {
        buttonText = "Disconnect";
        clickFunc = disconnect;
    }

    if (isConnected && providerChainID !== DEFAULT_NETWORK) {
        buttonText = "Wrong network";
        buttonStyle = { backgroundColor: "rgb(255, 67, 67)" };
        clickFunc = () => {
            checkWrongNetwork();
        };
    }

    useEffect(() => {
        setConnected(connected);
    }, [web3, connected]);

    return (
        <div className="connect-button" style={buttonStyle} onClick={clickFunc}>
            <p>{buttonText}</p>
        </div>
    );
}

export default ConnectButton;
