import Search from "../Search/Search";
import "./navbar.scss";

const NavBar = () => {
    return (
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>

            <li>
                <Search />
            </li>
          </ul>
        </div>
    )
};

export default NavBar;