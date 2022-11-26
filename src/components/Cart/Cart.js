import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = () => {
    const {items} = useSelector(({cart}) => cart);
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {items.map(item => {
                    return <CartItem
                        item={item}
                        key={item.id}
                    />
                })}
            </ul>
        </Card>
    );
};

export default Cart;