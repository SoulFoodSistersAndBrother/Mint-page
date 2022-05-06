import { Networks } from "./blockchain";

const ADDRESSES = {
    MAIN_NET: {
        NFT_ADDRESS: "",
    },
    TEST_NET: {
        NFT_ADDRESS: "0x766ef5e79978cb63371c61694d0e355c048eb0cb",
    },
};

export const getAddresses = (networkID: number | string) => {
    switch (networkID) {
        case Networks.MAIN_NET:
            return ADDRESSES.MAIN_NET;
        case Networks.TEST_NET:
            return ADDRESSES.TEST_NET;
        default:
            throw Error("Network don't support");
    }
};
