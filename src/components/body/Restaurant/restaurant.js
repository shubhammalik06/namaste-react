import "./restaurant.scss";

const Restaurant = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props.props;
  return (
    <div className="restaurant-container">
      <div className="restaurant-logo">
        <img className="res-logo-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      </div>
      <div className="Restaurant-name">{name}</div>
      <div className="restaurant-cuisine">{cuisines.flat().join(", ")}</div>
      <div className="restaurant-rating">{avgRating} stars</div>
      <div></div>
    </div>
  );
};

export default Restaurant;
