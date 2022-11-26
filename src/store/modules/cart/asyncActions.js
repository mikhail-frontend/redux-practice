import cart from "./index";
export const sendCartData = (items) => {
    return async () => {
        try {
            await fetch('https://redux-try-c84f7-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                headers: { Accept: 'application/json' },
                body: JSON.stringify(items)
            });
            return {result: 'success', message: 'Success!!'}
        } catch (e) {
            return {result: 'error', message: e.message}
        }
    }
}

export const getCartData = () => {
    return async (dispatch) => {
        const response = await fetch('https://redux-try-c84f7-default-rtdb.firebaseio.com/cart.json', {
            method: 'GET',
            headers: { Accept: 'application/json' }
        });
        const data = await response.json();
        dispatch(cart.actions.setItems(data));
    }
}
