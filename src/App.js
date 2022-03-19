import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./blockСomponents/Home/Home";
import TopMenu from "./blockСomponents/TopMenu/TopMenu";

let App = (props) => {
  return <>
  <div>
      {/*<TopMenu/>*/}
  </div>
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  </>
}

export default App;
