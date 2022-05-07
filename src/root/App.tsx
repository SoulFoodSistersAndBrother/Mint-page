import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import "./style.css";
import { useWeb3Context } from "../hooks";
import ConnectButton from "../components/ConnectButton";
import MintButton from "../components/MintButton";

function App() {
    const { address, connect, hasCachedProvider } = useWeb3Context();
    const [walletChecked, setWalletChecked] = useState(false);

    useEffect(() => {
        if (hasCachedProvider()) {
            connect().then(() => {
                setWalletChecked(true);
            });
        } else {
            setWalletChecked(true);
        }
    }, []);

    return (
        <div className="App">
            <Paper
                elevation={0}
                sx={{
                    px: 3,
                    py: 2,
                    margin: "auto",
                    mt: 10,
                    maxWidth: "40em",
                    flexGrow: 1,
                }}
            >
                <div id="connect-wrapper">
                    {address ? <p>{address.substring(0, 12)}... </p> : null}
                    <ConnectButton />
                </div>
                <div id="main-content">
                    <h1 style={{ textAlign: "center" }}>
                        SOUL FOOD SISTER BROTHER
                    </h1>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <MintButton />
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default App;
