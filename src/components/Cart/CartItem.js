import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cart} from "../../store/modules";
const {addItemToCart, removeItemFromCart} = cart.actions

const CartItem = (props) => {
    const {title, quantity, totalPrice, price, id} = props.item;
    const dispatch = useDispatch();

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${totalPrice.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={() => dispatch(removeItemFromCart(id))}>-</button>
                    <button onClick={() => dispatch(addItemToCart(props.item))}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
