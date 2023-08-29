import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  // easy way to declare state, buat mcm object
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    // from search.js "onkeypress", disini kita declare key apa yang akan trigger
    if (e.key === "Enter") {
      //lepas keypress baru enter database dengan input state.s
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        // store data dalam state.results
        let results = data.Search;

        setState((prevState) => {
          // store dalam state.results using prevstate
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    //variable s = value input
    let s = e.target.value;

    setState((prevState) => {
      // guna prestate supaya tiada overwright/data tidak bertindih
      //update/tukar prevstate dengan state yg baru which is the current s/target.value
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    // fetch data for the specific id yang kita click dalam results dan masuk ke dalam state.selected
    //untuk display data only for seleted movie in a popup
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    // simply clear state.selected supaya invalid untuk buka popup
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        {/* 1st */}
        <Search handleInput={handleInput} search={search} />

        {/* lepas suda dapat result / user enter input 
        pass in state.result as result*/}
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          // lepas click/suda ada data yang diselect baru boleh buka
          //pass in state.selected untuk pass selected data
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
