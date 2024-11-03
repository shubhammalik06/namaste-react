import ItemsList from "./items-list";

const RestaurantCategories = ({ resMenuInfo, showItems, setShowIndex }) => {

const handleClick = () => {
    setShowIndex();
}

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {resMenuInfo.title} ({resMenuInfo.itemCards.length})
          </span>
          <span>⬇</span>
        </div>

        {showItems && <ItemsList items={resMenuInfo.itemCards} key={resMenuInfo?.title} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
