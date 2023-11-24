import { Header } from "./containers";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const cartLength = useSelector((state) => state.reducer.cart.length);

  return (
    <div>
      <Header />
      <Link
        to="/cart"
        className="fixed p-2 bg-black right-0 top-1/2 -translate-y-1/2 text-white"
      >
        <p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
        <p className="mt-1 text-center">{cartLength}</p>
      </Link>
      <Outlet />
    </div>
  );
};

export default App;
