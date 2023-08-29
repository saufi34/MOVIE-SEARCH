import React from "react";

function Popup({ selected, closePopup }) {
  // untuk display selected movie dengan lebih in depth
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>
        {/* button untuk close popup */}
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
