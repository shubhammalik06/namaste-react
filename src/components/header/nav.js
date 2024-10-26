import HomeComponent from "../main-components/home";
import AboutComponent from "../main-components/about";
import ContactComponent from "../main-components/contact";
// import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className="m-auto">
      <ul className="flex justify-center items-center">
        <li className="p-4 cursor-pointer">
          Home
          {/* <Link to="/"> */}
          {/* <HomeComponent /> */}
          {/* </Link> */}
        </li>
        <li className="p-4 cursor-pointer">
          About
          {/* <Link to="/about"> */}
          {/* <AboutComponent /> */}
          {/* </Link> */}
        </li>
        <li className="p-4 cursor-pointer">
          Contact
          {/* <Link to="/contact"> */}
          {/* <ContactComponent /> */}
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationComponent;
