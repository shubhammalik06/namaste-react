import NavigationComponent from "../header/nav";
import { LOGO_IMG } from "../../common/constants";

const HeaderComponent = () => {
    return (
        <header className="w-full bg-gray-100 flex items-center justify-between">
            <div className="w-12 p-1 m-2.5">
                <img src={LOGO_IMG} alt="Logo" />
            </div>

            <NavigationComponent />
        </header>
    );
};

export default HeaderComponent;