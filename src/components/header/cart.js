import { useDispatch, useSelector } from "react-redux";
import ItemsList from "../restaurant-components/items-list";
import { clearCart } from "../../common/Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartStore = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-bold">Cart</div>
      <button className="p-2 m-2 bg-black text-white" onClick={clearCartStore}>
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && <h1>Cart is empty.</h1>}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
