import { LOGO_IMG } from "../../assets/common/constants";
import { Link } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";

const FooterComponent = () => {
  return (
    <div className="bg-black flex justify-left items-center p-2 absolute w-full inset-x-0 h-72 pl-4">
      <div className="text-white">
        <div className="w-24 ml-4">
          <Link to="/">
            <img className="w-16" src={LOGO_IMG} />
          </Link>
          <div className="font-semibold">Eco Food</div>
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
