import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const filter = (searchText) => {
  //  searchText.filter((value) => includes(value))
  }

// Need to work on it. : how to pass data between unrelated components.
 
  return (
    <div>
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={($event) => {
          setSearchText($event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(searchText);
          filter(searchText);
          setSearchText("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
