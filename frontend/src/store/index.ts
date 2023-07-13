import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import UserSlice from "./user.store";
import AuthSlice from "./auth.store";

const store = configureStore({
    reducer: {
        users: UserSlice.reducer,
        auth: AuthSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store;