import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../../components/card/Card";
// eslint-disable-next-line react/prop-types
const Categorysection = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [categoryName]);
  return (
    <div className="section">
      <h2 className="sub-head ">
        {categoryName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            productImg={item.image}
            price={item.price}
            title={item.title}
            desc={item.description}
            rate={item.rating.rate}
            quantity={1}
            productPageLink={`/prductsDetails/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Categorysection;
