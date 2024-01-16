import { useState, useEffect } from "react";
import useFilterData from "../../assets/common/useFilterData";
import MenuCard from "./ResCard";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6518723&lng=77.41404589999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setMenuItems(useFilterData(json.data, "info").slice(1));
  };

  return menuItems.length === 0 ? (
    <h1>Loading.....</h1>
  ) : (
    <div className="restaurant-menu">
      {menuItems.map((item) => (
        <MenuCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
