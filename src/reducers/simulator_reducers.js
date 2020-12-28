import * as  helpers from '../helpers';
import { config } from '../config/config'

let initialState = config;

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, initialState, action.payload, helpers.initMonthlyState(state));

        case 'CHANGE_AMOUNT':
            return Object.assign({}, state, helpers.updateAmountState(state, action.payload));

        case 'CHANGE_DURATION':
            return Object.assign({}, state, helpers.updateDurationState(state, action.payload));

        case 'CHANGE_MONTHLY':  
            return Object.assign({}, state, helpers.updateMonthlyState(state, action.payload));

        default:
            return state;
    }
}