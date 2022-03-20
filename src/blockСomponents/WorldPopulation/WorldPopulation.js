import React from "react";
import style from './WorldPopulation.module.css'

let WorldPopulation = (props) => {

    return <div className={style.worldPopulation}>
        <div className={style.subject}>Current world population* as of {props.date}
        </div>
        <div className={style.population}>
            <pre>{props.populationSize}</pre>
        </div>
        <div className={style.comment}>
            <div>* Estimated world population at the moment based on average fertility and
                mortality rates. The data error is no more than 1%.
            </div>
        </div>
    </div>
}

export default WorldPopulation;