import React from "react";
import {Route, Routes} from "react-router-dom";
import WorldPopulationContainer from "./blockСomponents/WorldPopulation/WorldPopulationContainer";

let App = (props) => {
  return <>
    <Routes>
      <Route path="/" element={<WorldPopulationContainer />} />
    </Routes>
  </>
}

export default App;
