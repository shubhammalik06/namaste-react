import "./header.scss";
import { LOGO_IMG } from "../../assets/common/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../header/Search/Search";

const HeaderComponent = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <>
      <div className="flex justify-between items-center shadow-lg p-2">
        <div className="flex justify-between w-24">
          <Link to="/">
            <img className="w-16 ml-4" src={LOGO_IMG} />
          </Link>
        </div>

        <div className="nav-items">
          <ul className="flex list-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </div>

        <button
          className="cursor-pointer px-5 py-2 m-4 bg-cyan-200 rounded-md"
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
