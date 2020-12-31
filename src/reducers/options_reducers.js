import * as  helpers from '../helpers';
import { config } from '../config/config'

let initialState = config;

const options_reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PROFIL':
            return Object.assign({}, state, helpers.updateProfileOptionState(state, action.payload));

        case 'TOGGLE_OPEN':
            return Object.assign({}, state, helpers.updateOpenOptionState(state, action.payload));

        default:
            return state;
    }
}

export default options_reducers;