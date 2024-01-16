const useFilterData = (json, filterKey) => {

  const getValues = (source, search) => {
    if (typeof source !== "object") {
      return [];
    }

    const [key, next] = Object.keys(source);
    const { [key]: value, ...rest } = source;

    return [
      ...(key === search ? [value] : getValues(value, search)),
      ...(next ? getValues(rest, search) : []),
    ];
  };

  const formatApiData = (data) => {
    const newMap = new Map();
    data.slice(2).forEach((item) => newMap.set(item.id, item));
    return [...newMap.values()];
  };

  return formatApiData(getValues(json, filterKey));
};

export default useFilterData;
