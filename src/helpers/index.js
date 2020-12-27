import { calculateMonthlyAmount } from '../helpers/calculator';

export function updateAmountState(state, newAmount) {

    newAmount = (newAmount > state.max_amount) ?  state.max_amount : ( (newAmount < state.mmin_amount) ? state.mmin_amount : newAmount);

    let newState = {
        'amount' : newAmount,
        'monthly' : calculateMonthlyAmount(newAmount, state.duration, state.interest),
        'min_monthly' : calculateMonthlyAmount(state.min_amount, state.max_duration, state.interest),
        'max_monthly' : calculateMonthlyAmount(state.max_amount, state.min_duration, state.interest)
    };

    return newState;
}