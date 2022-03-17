import React, {useState} from "react";

let Home = (props) => {




   const [ten, setTen]=useState(0);

    let utc = Math.round(new Date().getTime() / 1.0);

    setTimeout(() => {
       setTen(Math.round(utc*0.00266 - 3511351,62) + 3531865500);
    }, 100);

    return <>
        <div>Привет, Это Home.js</div>
        <div>{ten}</div>
    </>
}

export default Home;