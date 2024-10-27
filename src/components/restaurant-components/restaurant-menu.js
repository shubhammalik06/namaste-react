import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../../common/constants";
import useFilterData from "../../common/process-json";
import Shimmer from "../../common/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenuComponent = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [resName, setRestaurantName] = useState("");

  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantsMenu();
  }, []);

  const fetchRestaurantsMenu = async () => {
    const data = await fetch(RESTAURANT_MENU + resId);
    const json = await data.json();
    setRestaurantName(json?.data?.cards[0]?.card?.card?.text);
    const formattedMenu = useFilterData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2],
      "info"
    );
    setRestaurantMenu(formattedMenu);
  };

  return restaurantMenu === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl my-4 font-semibold">{resName}</div>

        <h2 className="text-2xl font-bold">Menu</h2>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          View All
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {restaurantMenu.map((item) => (
          <div
            className="w-[270px] h-[650px] p-2 m-2 bg-gray-50 border rounded-sm shadow-md"
            key={item.id}
          >
            <div className="h-48 my-3">
              <img
                className="w-52 h-52"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.imageId
                }
              />
              <div className="text-lg font-semibold mt-2">{item.name}</div>
              <div>
                {item.defaultPrice
                  ? item.defaultPrice / 100
                  : item.price / 100 || 0}
              </div>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuComponent;
