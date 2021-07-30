import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";

const App = () => {
  useEffect(() => {
    //Initializes materialize js
    M.AutoInit();
  }, []);
  return <SearchBar />;
};

export default App;
