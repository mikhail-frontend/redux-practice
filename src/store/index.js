import {configureStore} from "@reduxjs/toolkit";
import {ui, cart} from "./modules/";

const store = configureStore({
    reducer: {
        ui: ui.reducer,
        cart: cart.reducer
    }
})

export default store