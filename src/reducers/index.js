import { combineReducers } from 'redux';
import simulator_reducers from './simulator_reducers';
import options_reducers from './options_reducers';

const rootReducer = combineReducers({
    simulator_reducers,
    options_reducers
})

export default rootReducer;