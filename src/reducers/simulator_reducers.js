import * as  helpers from '../helpers';
import { config } from '../config/config'

let initialState = config;

const simulator_reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, initialState, action.payload, helpers.initMonthlyState(state));

        case 'CHANGE_AMOUNT':
            return Object.assign({}, state, helpers.updateAmountState(state, action.payload));

        case 'CHANGE_OPEN_AMOUNT':
            return Object.assign({}, state, helpers.updateOpenAmountState(state, action.payload));

        case 'CHANGE_DURATION':
            return Object.assign({}, state, helpers.updateDurationState(state, action.payload));

        case 'CHANGE_OPEN_DURATION':
            return Object.assign({}, state, helpers.updateOpenDurationState(state, action.payload));

        case 'CHANGE_MONTHLY':  
            return Object.assign({}, state, helpers.updateMonthlyState(state, action.payload));

        case 'CHANGE_INTEREST':  
            return Object.assign({}, state, helpers.updateInterestState(state, action.payload));

        case 'CHANGE_OPEN_INTEREST':  
            return Object.assign({}, state, helpers.updateOpenInterestState(state, action.payload));

        case 'CHANGE_PROFILE':  
            return Object.assign({}, state, helpers.updateProfileState(state, action.payload));

        case 'TOGGLE_PROFIL':
            return Object.assign({}, state, helpers.updateProfileOptionState(state, action.payload));

        case 'TOGGLE_OPEN':
            return Object.assign({}, state, helpers.updateOpenOptionState(state, action.payload));


        default:
            return state;
    }
}

export default simulator_reducers;