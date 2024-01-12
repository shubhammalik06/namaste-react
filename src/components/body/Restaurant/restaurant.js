import "./restaurant.scss";

const Restaurant = (props) => {
  const {URL, name, type_of_food, rating } = props.props;
  return (
    <div className="restaurant-container">
      <div className="restaurant-logo">
        <img className="res-logo-img" src={URL} />
      </div>
      <div className="Restaurant-name">{name}</div>
      <div className="restaurant-cuisine">{type_of_food}</div>
      <div className="restaurant-rating">{rating} stars</div>
      <div></div>
    </div>

  );
};

export default Restaurant;
