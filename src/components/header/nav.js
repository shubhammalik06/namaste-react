import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className="m-auto">
      <ul className="flex justify-center items-center">
        <li className="p-4 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationComponent;
