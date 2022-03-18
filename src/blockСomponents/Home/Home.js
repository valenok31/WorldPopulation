import React, {useEffect, useState} from "react";
import style from './Home.module.css'

let Home = (props) => {

    let interval = null;
    const [timeInterval, setTimeInterval] = useState(0);
    const [round, setRound] = useState(0)
    const population1970 = 3532000000; /* the population of the earth on January 16, 1970 (zero in Unix time) */
    const unixTime01161970 = 1320057000; /* January 16, 1970 Unix time */
    const growth = 2.66; /* average population growth per 1 second for 2018 (difference between birth rate and mortality) */
    const correctionFactor = 134500; /* correction factor */
    useEffect(
        () => {
            interval = setInterval(() => {
                let utc = new Date().getTime();
                //let ewt = Math.round(utc * 0.00266 - 3511351, 62) + 3531865500 - round;
                //let ewt = Math.round(utc * 0.00266 - 3511351) + 3531865500 - round;
                let ewt = Math.round((utc-unixTime01161970)*growth/1000)+population1970-correctionFactor;
                console.log(utc)
                setTimeInterval(pipl(ewt));
                setRound(2 - Math.round(Math.random() * 4));
            }, 200)
            return () => clearInterval(interval);
        }, [round]
    )

    const pipl = (timeInterval) => {
        return timeInterval.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return <div className={style.idem}>{timeInterval}</div>
}

export default Home;