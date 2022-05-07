import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./slices/messages-slice";

const store = configureStore({
    reducer: {
        messages: messagesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
