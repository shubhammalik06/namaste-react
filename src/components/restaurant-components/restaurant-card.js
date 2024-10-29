const RestaurantCardComponent = ({ resData }) => {
  return (
    <div className="border-black-color m-2 p-2 w-[250px] bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer hover:drop-shadow-md">
      <div className="flex justify-center">
        <img
          className="w-52 h-52"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.cloudinaryImageId
          }
        />
      </div>

      <div className="h-48 mt-3">
        <div className="text-lg font-semibold">{resData.name}</div>
        <div>
          {resData.locality}, {resData.areaName}
        </div>
        <div>{resData.cuisines[0]}</div>
        <div>{resData.avgRating}</div>
      </div>
    </div>
  );
};

export const WithPromotionLabel = (RestaurantCardComponent) => {
    return (props) => {
        return (
            <div>
                <label className="absolute rounded-md bg-lime-600 px-3 py-2 z-10">Promoted</label>
                <RestaurantCardComponent {...props} />
            </div>
        )
    }
}

export default RestaurantCardComponent;