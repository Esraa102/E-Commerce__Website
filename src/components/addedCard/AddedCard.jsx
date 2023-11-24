/* eslint-disable react/prop-types */

import "./addedCard.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  increaseCart,
} from "../../reducers/shoppingCartSlice";

const AddedCard = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseCart(id));
  };
  const decrease = () => {
    dispatch(decreaseCart(id));
  };
  const remove = (e) => {
    dispatch(removeFromCart(e.target.parentElement.id));
  };
  return (
    <div
      id={id}
      className="p-2 border  mb-4  flex items-center gap-4 justify-between flex-col lg:flex-row"
    >
      <div className="flex  items-center gap-4">
        <img src={img} alt="image" className="w-[150px] h-[200px]" />
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-500">${price}</p>
          <div className="flex items-center gap-2 mt-4 ">
            <button onClick={increase} className="add-remove-btn">
              +
            </button>
            <p>{quantity}</p>
            <button onClick={decrease} className="add-remove-btn">
              -
            </button>
          </div>

          <p className="mt-4  font-semibold">
            Totla Price:{" "}
            <span className="text-orange-600 total-price">
              ${Number(price) * quantity}
            </span>
          </p>
        </div>
      </div>
      <button onClick={remove} className="bg-red-500 px-4 py-1 text-white">
        Remove From Cart
      </button>
    </div>
  );
};

export default AddedCard;
