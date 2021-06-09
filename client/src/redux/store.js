import { createStore , compose , applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import countriesReducer from './ducks/countriesDuck';
import activitiesReducer from './ducks/activitiesDuck';


const rootReducers = combineReducers({
  countries: countriesReducer,
  activities: activitiesReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)))

export default store