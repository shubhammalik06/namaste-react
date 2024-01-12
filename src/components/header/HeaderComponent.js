import "./header.scss";
import logo from "../../assets/image/logo.png";
import NavBar from "./NavBar/navBar";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo-image" src={logo} />
        </div>

        <div>
            <NavBar />
        </div>
        
      </div>
    </>
  );
};

export default HeaderComponent;
