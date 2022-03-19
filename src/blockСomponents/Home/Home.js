import React, {useEffect, useState} from "react";
import style from './Home.module.css'

let Home = (props) => {

    let interval = null;
    const [populationSize, setPopulationSize] = useState(7911135151);
    const [volatility, setVolatility] = useState(0)
    const population1970 = 3532000000;   /* the population of the earth on January 16, 1970 */
    const unixTime01161970 = 1320057000; /* January 16, 1970 Unix time */
    const growth = 2.66;                 /* average population growth per 1 second for 2018 (difference between birth rate and mortality) */
    const correctionFactor = 134500;     /* correction factor */
    const volatilityСoefficient = 10;    /* volatility coefficient */

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    let date = new Date().toLocaleString("en-US", options);
    console.log(date);

    useEffect(
        () => {
            interval = setInterval(() => {
                let utc = new Date().getTime();
                let populationSize = Math.round((utc - unixTime01161970) * growth / 1000) + population1970 - correctionFactor - volatility;
                setPopulationSize(dividedDigits(populationSize));
                setVolatility(Math.round(Math.random() * volatilityСoefficient));
            }, 200)
            return () => clearInterval(interval);
        }, [volatility]
    )

    const dividedDigits = (multitude) => {
        return multitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return <>
        <div className={style.worldPopulation}>
            <div className={style.subject}>Current world population* as of {date}
            </div>
            <div className={style.population}>
                <pre>{populationSize}</pre>
            </div>
            <div className={style.comment}>
                <div>* Estimated world population at the moment based on average fertility and
                    mortality rates. The data error is no more than 1%.
                </div>
            </div>
        </div>
    </>
}

export default Home;