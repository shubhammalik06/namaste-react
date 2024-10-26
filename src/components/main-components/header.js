import NavigationComponent from "../header/nav";
import { LOGO_IMG } from "../../common/constants";

const HeaderComponent = () => {
  return (
    <header className="w-full bg-gray-100 flex items-center">
      <div className="w-12 p-1 m-2.5">
        <img src={LOGO_IMG} alt="Logo" />
      </div>

      <NavigationComponent />

      <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Login
      </button>
    </header>
  );
};

export default HeaderComponent;
