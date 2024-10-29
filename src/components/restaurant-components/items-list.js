const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="border-gray-200 border-b-2 m-3">
          <div className="flex justify-between items-center">
            <div
              key={item.card.info.id}
              className="text-left p-2"
            >
              <div className="py-1">
                <span>{item.card.info.name}</span>
                <span>{item.card.info.defaultPrice / 100 || 0}</span>
              </div>

              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <img
              className="w-20 h-20"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
