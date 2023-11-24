import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { AddedCard } from "../../components";

const Cart = () => {
  const cartItems = useSelector((state) => state.reducer.cart);
  const prices = [];

  cartItems.forEach((ele) => {
    prices.push(ele.price * ele.cartQuantity);
  });

  const totalPrice = prices.reduce((curr, acc) => {
    return curr + acc;
  }, 0);

  return (
    <div className="section py-8">
      {!cartItems.length && (
        <div className="text-center">
          <p className="font-semibold text-lg mb-2">You Have No Items</p>
          <Link to="/products" className="text-orange-600 underline">
            Go For Shopping
          </Link>
        </div>
      )}
      {cartItems.map((item) => (
        <AddedCard
          key={item.id}
          id={item.id}
          img={item.img}
          price={item.price}
          title={item.title}
          quantity={item.cartQuantity}
        />
      ))}

      <div className="p-2 bg-gray-200 mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-lg mb-2 font-semibold">
            Total Price:{" "}
            <span className="text-orange-600">${totalPrice.toFixed(2)}</span>
          </p>
          <p className="text-sm text-gray-600">
            Taxes and shipping are calculated at checkout{" "}
          </p>
        </div>
        <button className="mainBtn bg-blue-700">Check out</button>
      </div>
    </div>
  );
};

export default Cart;
