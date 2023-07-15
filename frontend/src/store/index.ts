import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import UserSlice from "./user.store";
import AuthSlice from "./auth.store";
import AddressSlice from "./address.store";
import RequestsSlice from "./request.store";
import ModalsSlice from "./modals.store";

const store = configureStore({
    reducer: {
        users: UserSlice.reducer,
        auth: AuthSlice.reducer,
        address: AddressSlice.reducer,
        request: RequestsSlice.reducer,
        modal: ModalsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store;