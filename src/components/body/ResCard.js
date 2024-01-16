const MenuCard = (props) => {
  return props.imageId ? (
    <div className="item-logo-container">
      <div className="image-container">
        <img
          className="item-logo-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.imageId
          }
        />
      </div>
      <div>Name : {props.name}</div>
      <div>Price : Rs. {props.price / 100}/-</div>
      <div className="description">Description : {props.description}</div>
    </div>
  ) : (
    <></>
  );
};

export default MenuCard;
