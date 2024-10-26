const RestaurantCardComponent = ({ resData }) => {
  return (
    <div className="border-black-color m-1 p-2 bg-slate-300 w-2/12 h-96">
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
        {/* <div>{resData.id}</div> */}
        <div>{resData.cuisines[0]}</div>
        <div>{resData.avgRating}</div>
      </div>

      {/* <div className="flex justify-center items-end m-auto h-1">
        <button className="text-center bg-blue-400 text-white px-5 py-1 cursor-pointer">
          Book a Table
        </button>
      </div> */}
    </div>
  );
};

export default RestaurantCardComponent;