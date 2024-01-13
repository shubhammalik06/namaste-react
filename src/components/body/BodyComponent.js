import Restaurant from "./Restaurant/restaurant";
import "./bodyComponent.scss";
import * as restaurantDetails from "../../assets/JSON/restaurant.json";
import { useState } from "react";

const Body = () => {
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] =
    useState(restaurantDetails);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantDetails.filter((x) => x.rating > 5);
            setListOfFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="reset-btn"
          onClick={() => setListOfFilteredRestaurants(restaurantDetails)}
        >
          Reset
        </button>
      </div>

      <div className="restaurants">
        {listOfFilteredRestaurants.map((data) => (
          <Restaurant key={data._id.$oid} props={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
