import RestaurantCardComponent from "./restaurant-card";
import { useEffect, useState } from "react";
import { API_URL } from "../../common/constants";
import Shimmer from "../../common/Shimmer";

const RestaurantMainComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    formattedData = useFilterData(json, "info");
    setListOfRestaurants(formattedData);
  };

  const useFilterData = (json, filterKey) => {
    const getValues = (source, search) => {
      if (typeof source !== "object") {
        return [];
      }

      const [key, next] = Object.keys(source);
      const { [key]: value, ...rest } = source;

      return [
        ...(key === search ? [value] : getValues(value, search)),
        ...(next ? getValues(rest, search) : []),
      ];
    };

    const formatApiData = (data) => {
      const newMap = new Map();
      data.slice(2).forEach((item) => newMap.set(item.id, item));
      return [...newMap.values()];
    };

    return formatApiData(getValues(json, filterKey));
  };

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            let filteredRes = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating >= 4.6
            );
            setListOfRestaurants(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-start items-center w-full h-full">
        {listOfRestaurants.map((restaurant, i) => (
          <RestaurantCardComponent key={i} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMainComponent;
