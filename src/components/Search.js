import React from "react";

function Search({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        // setiap kali ada perubahan dalam input, dia akan panggil {handleinput}
        onChange={handleInput}
        // setiap kali ada keypress, call funtion
        // keyakan declare dalam function
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
