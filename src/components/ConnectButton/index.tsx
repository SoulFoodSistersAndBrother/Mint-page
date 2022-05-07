import { useEffect, useState } from "react";
import { useWeb3Context } from "../../hooks";
import { DEFAULT_NETWORK } from "../../constants";
import "./style.css";
import Button from "@mui/material/Button";

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
    let buttonStyle = {
        backgroundColor: "black",
    };
    let buttonVariant: "contained" | "outlined" = "contained";

    if (isConnected) {
        buttonText = "Disconnect";
        clickFunc = disconnect;
        buttonVariant = "outlined";
        buttonStyle = {
            backgroundColor: "white",
        };
    }

    if (isConnected && providerChainID !== DEFAULT_NETWORK) {
        buttonText = "Wrong network";
        clickFunc = () => {
            checkWrongNetwork();
        };
    }

    useEffect(() => {
        setConnected(connected);
    }, [web3, connected]);

    return (
        <div>
            <Button
                style={buttonStyle}
                size="small"
                variant={buttonVariant}
                onClick={clickFunc}
            >
                <p>{buttonText}</p>
            </Button>
        </div>
    );
}

export default ConnectButton;
