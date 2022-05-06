import React from "react";
import Paper from "@mui/material/Paper";
import "./style.css";
import ConnectButton from "../components/ConnectButton";

function App() {
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
            </Paper>
        </div>
    );
}

export default App;
