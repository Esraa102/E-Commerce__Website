import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="shadow-lg sticky top-0 z-10 bg-white">
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <Link to="/" className="sub-head">
          E-Commerce
        </Link>
        <Navbar classNav="large-nav" />
        <div className="block lg:hidden">
          {showNav ? (
            <div>
              <span className="menue-btn" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              </span>
              <Navbar classNav="mobile-nav" />
            </div>
          ) : (
            <span className="menue-btn" onClick={() => setShowNav(true)}>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
