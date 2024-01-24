const Restaurant = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = props.props;
  return (
    <div className="w-[250px] h-72 p-2 m-2 bg-gray-100 border rounded-sm hover:bg-gray-200 text-sm/[16px] shadow-md">
      <div className="flex justify-center">
        <img
          className="w-36 h-36"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="Restaurant-name pt-2">{name}</div>
      <div className="restaurant-cuisine">{cuisines.flat().join(", ")}</div>
      <div className="restaurant-rating">{avgRating} stars</div>
      <div></div>
    </div>
  );
};

export const withPromotion = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <div className="bg-black text-white absolute rounded-lg p-1 text-xs">Top Rated</div>
        <Restaurant {...props}/>
      </div>
    );
  };
};

export default Restaurant;
