import HomeComponent from "../main-components/home";
import AboutComponent from "../main-components/about";
import ContactComponent from "../main-components/contact";
// import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className="mr-8">
      <ul className="flex justify-end items-center">
        <li className="p-4">
          Home
          {/* <Link to="/"> */}
          {/* <HomeComponent /> */}
          {/* </Link> */}
        </li>
        <li className="p-4">
          About
          {/* <Link to="/about"> */}
          {/* <AboutComponent /> */}
          {/* </Link> */}
        </li>
        <li className="p-4">
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
