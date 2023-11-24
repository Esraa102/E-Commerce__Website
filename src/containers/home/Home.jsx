import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slider1, slider2, slider3 } from "../../assets";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Card } from "../../components";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const scrollSlider = (e) => {
    const img = document.getElementById("image").clientWidth;
    let slider = document.getElementById("sliderContainer");
    if (e.target.id === "left") {
      slider.scrollLeft = slider.scrollLeft - img;
    } else {
      slider.scrollLeft = slider.scrollLeft + img;
    }
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div>
      <div className="slider relative">
        <div
          id="sliderContainer"
          className="images-container flex flex-grow-0 overflow-x-scroll  h-screen relative w-full"
        >
          <img
            id="image"
            src={slider1}
            alt="one"
            className="absolute w-full h-full left-0 object-cover"
          />
          <img
            src={slider2}
            alt="two"
            className="absolute w-full h-full left-[100%] object-cover"
          />
          <img
            src={slider3}
            alt="three"
            className="absolute w-full h-full left-[200%] object-cover"
          />
        </div>

        <span
          onClick={scrollSlider}
          className="absolute top-1/2 -translate-y-1/2 font-bold text-xl left-4"
        >
          <FontAwesomeIcon
            id="left"
            icon={faArrowAltCircleLeft}
          ></FontAwesomeIcon>
        </span>
        <span
          onClick={scrollSlider}
          className="absolute top-1/2 -translate-y-1/2 font-bold text-xl right-4"
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
        </span>
      </div>
      <div className="section">
        <div className="flex items-center justify-between gap-4">
          <h2 className="mb-4 text-xl font-bold text-orange-600 uppercase">
            Some Of Our Produts
          </h2>
          <Link to="products" className="mainBtn">
            Explore More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              desc={item.description}
              rate={item.rating.rate}
              price={item.price}
              productImg={item.image}
              productPageLink={`/prductsDetails/${item.id}`}
              quantity={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
