let initialState = {
    'amount': 15000,
    'min_amount': 5000,
    'max_amount': 200000,
    'amountStep': 10,
    'duration': 24,
    'min_duration': 6,
    'max_duration': 84,
    'durationStep': 10,
    'monthly': '',
    'min_monthly': '',
    'max_monthly': '',
    'monthlyStep': 1,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, initialState);;

        case 'CHANGE_AMOUNT':
            return Object.assign({}, state, {'amount' : action.payload});

        case 'CHANGE_DURATION':
            return Object.assign({}, state, {'duration' : action.payload});

        case 'CHANGE_MONTHLY':  
            return Object.assign({}, state, {'monthly' : action.payload});

        default:
            return state;
    }
}