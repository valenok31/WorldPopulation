import React from "react";
import {Route, Routes} from "react-router-dom";
import WorldPopulation from "./blockСomponents/WorldPopulation/WorldPopulation";

let App = (props) => {
  return <>
    <Routes>
      <Route path="/" element={<WorldPopulation />} />
    </Routes>
  </>
}

export default App;
