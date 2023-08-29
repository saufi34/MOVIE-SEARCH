import React from "react";

function Result({ result, openPopup }) {
  return (
    //create specific div untuk display data so kita boleh display all data yg perlu saja in a visual way
    // onclick kita akan call openpopup passing on result.imdbID for the target we clicked on
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
