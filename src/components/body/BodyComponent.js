import Restaurant from "./Restaurant/restaurant";
import "./bodyComponent.scss";
import { useState, useEffect, useRef } from "react";
import useFilterData from "../../assets/common/useFilterData";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );

  const [formatedData, setformatedData] = useState([]);

  const countRef = useRef(formatedData);

  useEffect(() => {
    fetchData();
  }, [countRef]);

  // const getValues = (source, search) => {
  //   if (typeof source !== "object") {
  //     return [];
  //   }

  //   const [key, next] = Object.keys(source);
  //   const { [key]: value, ...rest } = source;

  //   return [
  //     ...(key === search ? [value] : getValues(value, search)),
  //     ...(next ? getValues(rest, search) : []),
  //   ];
  // };

  // const formatApiData = async (json, filterKey) => {
  //   let data = await getValues(json, filterKey);

  //   let data2 = await data.splice(2, data.length);

  //   const newMap = new Map();
  //   await data2.forEach((item) => newMap.set(item.id, item));
  //   return [...newMap.values()];
  // };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6518723&lng=77.41404589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const formatedData = useFilterData(json, "info"); // using the custom hook to filterout data -- (json, filterKey)

    setformatedData(formatedData);
    setListOfFilteredRestaurants(formatedData);
  };

  return listOfFilteredRestaurants.length === 0 ? (
    <h1>Loading.....</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfFilteredRestaurants.filter(
              (x) => x.avgRating > 4.3
            );
            setListOfFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="reset-btn"
          onClick={() => setListOfFilteredRestaurants(formatedData)}
        >
          Reset
        </button>
      </div>

      <div className="restaurants">
        {listOfFilteredRestaurants.map((data) => (
          <Link to={"/restaurants/" + data.id} key={data.id}>
            <Restaurant props={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
