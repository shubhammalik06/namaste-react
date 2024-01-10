import "../header/header.scss";
import logo from "../../assets/image/logo.png";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo-image" src={logo} />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
