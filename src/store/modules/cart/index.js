import {createSlice} from "@reduxjs/toolkit";

const index = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        addItemToCart(state, {payload: newItem}) {
            const existingItem = state.items.find(({id}) => id === newItem.id)
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items = [...state.items, {
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                }];
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart(state, {payload: id}) {
            const existingItem = state.items.find((item) => id === item.id);
            if(!existingItem) return;
            state.changed = true;
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => id !== item.id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        setItems(state, {payload}) {
            if(!payload) return;
            state.items = payload;
            state.totalQuantity = payload.reduce((acc, {quantity}) => acc+=quantity, 0)
        }
    }
});
export default index