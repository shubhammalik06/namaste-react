import RestaurantCardComponent, { WithPromotionLabel } from "./restaurant-card";
import { useEffect, useState } from "react";
import { API_URL } from "../../common/constants";
import Shimmer from "../../common/Shimmer";
import useFilterData from "../../common/process-json";
import { Link } from "react-router-dom";

const RestaurantMainComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = WithPromotionLabel(RestaurantCardComponent);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    formattedData = useFilterData(json, "info");
    console.log(formattedData);
    setListOfRestaurants(formattedData);
    setFilteredRestaurants(formattedData);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center w-1/2">
          <input
            className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          />

          <button
            className="text-white ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              let filteredRes = listOfRestaurants.filter((restaurant) =>
                restaurant.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchText("");
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>

          <button
            className="focus:outline-none ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            Clear filter
          </button>
        </div>

        <button
          className="text-white ml-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            let filteredRes = listOfRestaurants.filter(
              (restaurant) => restaurant.avgRating >= 4.6
            );
            setFilteredRestaurants(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="w-full flex justify-center p-2 pt-11 text-2xl font-semibold">
        Restaurants Name
      </div>
      <hr className="my-4" />
      <div className="flex flex-wrap justify-start items-center w-full h-full">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
            {restaurant.avgRating >= 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCardComponent resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMainComponent;
