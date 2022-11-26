import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {ui} from "../../store/modules";


const CartButton = () => {
    const {actions: {toggleCart}} = ui;
    const totalQuantity = useSelector(({cart}) => cart.totalQuantity)
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(toggleCart())
    }
    return (
        <button className={classes.button} onClick={clickHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>
    );
};

export default CartButton;
