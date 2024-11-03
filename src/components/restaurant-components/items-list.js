import { useDispatch } from "react-redux";
import { addItem } from "../../common/Store/cartSlice";

const ItemsList = ({ items }) => {

const dispatch = useDispatch();

  const addToCart = (item) => {
   // console.log("Adding to cart: ");
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div className="border-gray-200 border-b-2 m-3">
          <div className="flex justify-between items-center w-full">
            <div
              key={item.card.info.id}
              className="text-left p-2 w-4/5 cursor-default"
            >
              <div className="py-1">
                <span>{item.card.info.name}</span>
                <span>{item.card.info.defaultPrice / 100 || 0}</span>
              </div>

              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="relative w-1/5">
              <img
                className="w-20 h-20 cursor-default"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
              />
              <button
                className="absolute right-0 bg-black text-white px-2 py-1 mt-3 text-xs top-0 cursor-pointer"
                onClick={() => addToCart(item)}
              >
                + Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
