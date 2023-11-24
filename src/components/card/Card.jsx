/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/shoppingCartSlice";
// eslint-disable-next-line react/prop-types
const Card = ({
  id,
  title,
  desc,
  rate,
  price,
  productImg,
  productPageLink,
  quantity,
}) => {
  let dataFromCart = useSelector((state) => state.reducer.cart);
  const dispatch = useDispatch();
  const addHanlder = (e) => {
    dataFromCart = dataFromCart.filter(
      (item) => item.id === Number(e.target.parentElement.id)
    );
   
    if (dataFromCart.length === 0) {
      dispatch(addToCart({ id, title, productImg, price, quantity }));
    }
  };

  return (
    <div
      id={id}
      className="p-4 shadow-lg  flex flex-col justify-between h-full"
    >
      <Link to={productPageLink}>
        <img
          src={productImg}
          alt="product"
          className="w-[150px] h-[200px]   mb-4 mx-auto"
        />
      </Link>
      <p className="text-lg  mb-4 font-bold">{title}</p>
      <p className="text-sm text-gray-500">{desc}</p>
      <p className="  font-bold">Price: ${price}</p>
      <div className="flex items-center gap-2">
        <div className="text-yellow-600">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
        </div>
        <p className="text-sm text-gray-500">{rate}</p>
      </div>
      <button onClick={addHanlder} className="mainBtn">
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
