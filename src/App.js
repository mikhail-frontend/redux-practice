import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getCartData, sendCartData} from "./store/modules/cart/asyncActions";


function App() {
    const cartIsVisible = useSelector(({ui}) => ui.cartIsVisible);
    const items = useSelector(({cart}) => cart.items);
    const changed = useSelector(({cart}) => cart.changed);
    const dispatch = useDispatch()

    useEffect(() => {
        if(!changed) return;
        (async () => {
            const {result, message} = await dispatch(sendCartData(items));
            notify(message, result)
        })();
    }, [dispatch, items, changed]);


    useEffect(() => {
        dispatch(getCartData());
    }, [dispatch])


    const notify = (message = '', type = 'success') => type === 'success'
        ? toast.success(message)
        : toast.error(message);

    return (
        <Layout>
            {cartIsVisible && <Cart/>}
            <Products/>
            <ToastContainer />
        </Layout>
    );
}

export default App;
