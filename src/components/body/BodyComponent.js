import Restaurant from "./Restaurant/restaurant";
import "./bodyComponent.scss";
import * as restaurantDetails from "../../assets/JSON/restaurant.json";
import { useState } from "react";

const Body = () => {

  const[listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(restaurantDetails);

  return (
    <div className="body">
      
      <div className="filter">
        <button class="filter-btn" onClick={() => {
          let filteredList = restaurantDetails.filter(x => x.rating > 4);
          setListOfFilteredRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
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
