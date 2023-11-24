import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Home,
  Products,
  Contact,
  Cart,
  Categories,
  Categorysection,
  Product,
  
} from "./containers/index.js";
import { SingleProduct } from "./components/index.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./store/store.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="categories/" element={<Categories />}>
        <Route path=":categoryName" element={<Categorysection />} />
      </Route>
      <Route path="products" element={<Products />} />
      <Route path="prductsDetails/" element={<Product />}>
        <Route path=":productId" element={<SingleProduct />} />
      </Route>

      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
