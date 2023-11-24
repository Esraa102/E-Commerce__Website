import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/shoppingCartSlice";
// eslint-disable-next-line react/prop-types
const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [productId]);
  let addedCards = useSelector((state) => state.reducer.cart);
  const dispatch = useDispatch();
  const addHandler = (e) => {
    addedCards = addedCards.filter(
      (item) => item.id === Number(e.target.parentElement.id)
    );
    if (addedCards.length === 0) {
      dispatch(
        addToCart({
          id: data.id,
          productImg: data.image,
          price: data.price,
          title: data.title,
        })
      );
    }
  };
  return (
    <div className="section py-8 flex items-center gap-4 flex-col lg:flex-row">
      <img src={data.image} alt="image" className="w-full lg:w-[30%]" />
      <div id={data.id}>
        <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{data.description}</p>
        <p className="text-lg font-semibold">Price: ${data.price}</p>
        <div className="text-yellow-600 mb-4">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
        </div>
        <button
          onClick={addHandler}
          className="px-4 py-1 bg-orange-600 rounded  text-white"
        >
          Add To Cart
        </button>
        <button className="px-4 py-1 bg-gray-600 rounded ml-4 text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
