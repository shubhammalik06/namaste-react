import "./header.scss";
import logo from "../../assets/image/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../header/Search/Search";

const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo-image" src={logo} />
        </div>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <li>
              <Search />
            </li>
          </ul>
        </div>

        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </>
  );
};

export default HeaderComponent;
