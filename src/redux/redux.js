import mainSpace_reducer from './mainSpace_reducer';
import {applyMiddleware, combineReducers, createStore} from "redux";
import secondarySpace_reducer from "./secondarySpace_reducer";
import thirdSpace_reducer from "./thirdSpace_reducer";
import fourthSpace_reducer from "./fourthSpace_reducer";
import generalSetting_reducer from "./generalSetting_reducer";
import fifthSpace_reducer from "./fifthSpace_reducer";
import eighthSpace_reducer from "./eighthSpace_reducer";
import ninthSpace_reducer from "./ninthSpace_reducer";
import tenthSpace_reducer from "./tenthSpace_reducer";
import killFlies_reducer from "./killFlies_reducer";
import thunkMiddleware from "redux-thunk";
import visitAllContinents_reducer from "./visitAllContinents_reducer";

let reducers = combineReducers({
    mainSpace_reducer: mainSpace_reducer,
    secondarySpace_reducer: secondarySpace_reducer,
    thirdSpace_reducer: thirdSpace_reducer,
    fourthSpace_reducer: fourthSpace_reducer,
    generalSetting_reducer: generalSetting_reducer,
    fifthSpace_reducer: fifthSpace_reducer,
    eighthSpace_reducer: eighthSpace_reducer,
    ninthSpace_reducer: ninthSpace_reducer,
    tenthSpace_reducer: tenthSpace_reducer,
    killFlies_reducer: killFlies_reducer,
    visitAllContinents_reducer: visitAllContinents_reducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
