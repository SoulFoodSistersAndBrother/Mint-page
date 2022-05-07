import { useWeb3Context } from "../../hooks";
import Button from "@mui/material/Button";
import "./style.css";
import { SFSBCollectionContract } from "../../abi";
import { ethers } from "ethers";
import { getGasPrice } from "../../helpers/get-gas-price";
import { getAddresses } from "../../constants";
require("dotenv").config();

function MintButton() {
    const { provider, address, connect, chainID, checkWrongNetwork } =
        useWeb3Context();

    const privateMint = process.env.REACT_APP_PRIVATE_SALE == "true";
    const buttonText = privateMint ? "Whitelist Mint" : "Mint";

    const mint = async (amount: number) => {
        const signer = provider.getSigner();
        const addresses = getAddresses(chainID);

        const collectionHelper = new ethers.Contract(
            addresses.NFT_ADDRESS,
            SFSBCollectionContract,
            signer
        );

        const nftPrice = await collectionHelper.getPrice();
        let mintTx;

        try {
            const gasPrice = await getGasPrice(provider);
            if (privateMint) {
                mintTx = await collectionHelper.mintAllowList(amount, {
                    value: nftPrice,
                    gasPrice,
                });
            } else {
                mintTx = await collectionHelper.mint(amount, {
                    value: nftPrice,
                    gasPrice,
                });
            }
        } catch (error) {
            // TODO: handle this
            console.log({ error });
        } finally {
            if (mintTx) {
                console.log(`Mint TX: ${mintTx}`);
                // TODO: dispatch a message here
            }
        }
    };

    return (
        <div>
            <Button onClick={() => mint(1)} variant="contained">
                {buttonText}
            </Button>
        </div>
    );
}

export default MintButton;
