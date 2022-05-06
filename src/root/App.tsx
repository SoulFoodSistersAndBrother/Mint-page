import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import "./style.css";
import { useWeb3Context } from "../hooks";
import ConnectButton from "../components/ConnectButton";

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
                id="main-content"
                sx={{
                    px: 3,
                    py: 2,
                    margin: "auto",
                    mt: 10,
                    maxWidth: "40em",
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
            >
                <h1>Hello World</h1>
                <ConnectButton />
                {address ? <p>Connected eh: ${address}</p> : <p>no</p>}
            </Paper>
        </div>
    );
}

export default App;
