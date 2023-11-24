import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react/prop-types
const Navbar = ({ classNav }) => {
  const [showMiniNav, setShowMiniNav] = useState(false);
  return (
    <ul className={classNav}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-orange-700" : "text-gray-600"} link`
          }
        >
          Home
        </NavLink>
      </li>
      <li className=" relative">
        <p
          onClick={() => setShowMiniNav(!showMiniNav)}
          className="cursor-pointer text-gray-600 flex gap-2"
        >
          <span>Categories </span>
          {showMiniNav ? (
            <FontAwesomeIcon
              icon={faAngleUp}
              className="mt-2"
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faAngleDown}
              className="mt-2"
            ></FontAwesomeIcon>
          )}
        </p>
        {showMiniNav && (
          <ul className="mini-nav">
            <li>
              <NavLink
                to="categories/electronics"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-600"} link`
                }
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories/jewelery"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-600"} link`
                }
              >
                Jewelery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories/men's clothing"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-600"} link`
                }
              >
                Men&apos;s clothing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories/women's clothing"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-600"} link`
                }
              >
                Women&apos;s clothing
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive ? "text-orange-700" : "text-gray-600"} link`
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-orange-700" : "text-gray-600"} link`
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
