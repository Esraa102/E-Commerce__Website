import { useEffect, useState } from "react";
import { Card } from "../../components";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  });
  return (
    <div className="section">
      <h2 className="sub-head">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              productImg={item.image}
              price={item.price}
              rate={item.rating.rate}
              desc={item.description}
              productPageLink={`/prductsDetails/${item.id}`}
              quantity={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
