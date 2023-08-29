import React from "react";

import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results.map((result) => (
        // display result
        // use map to display the whole array of result
        // tapi mau display only certain aspects of the data
        // so buat satu component lagi untuk wakilkan data display
        <Result key={result.imdbID} result={result} openPopup={openPopup} />
      ))}
    </section>
  );
}

export default Results;
