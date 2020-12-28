import { calculateMonthly, calculateAmount, calculateDuration } from '../helpers/calculator';

/**
 * Update the state when the amount changes.
 */
export function updateAmountState(state, newAmount) {
    newAmount = Math.max(state.min_amount, Math.min(state.max_amount, newAmount));
    let newState = {
        'amount' : newAmount,
        'monthly' : calculateMonthly(newAmount, state.duration, state.interest),
    };

    return newState;
}

/**
 * Update the state when the interest changes.
 */
export function updateInterestState(state, newInterest) {
    newInterest = Math.max(state.min_interest, Math.min(state.max_interest, newInterest));
    let newState = {
        'interest' : newInterest,
        'monthly' : calculateMonthly(state.amount, state.duration, newInterest),
    };

    return newState;
}

/**
 * Update the state when the duration changes.
 */
export function updateDurationState(state, newDuration) {
    newDuration = Math.max(state.min_duration, Math.min(state.max_duration, newDuration));
    let newState = {
        'duration' : newDuration,
        'monthly' : calculateMonthly(state.amount, newDuration, state.interest),
    };

    return newState;
}

/**
 * Update the state when the monthly value changes.
 */
export function updateMonthlyState(state, newMonthly) {
    newMonthly = Math.max(state.min_monthly, Math.min(state.max_monthly, newMonthly));
    let newAmount = calculateAmount(state.duration, newMonthly, state.interest);
    newAmount = Math.max(state.min_amount, Math.min(state.max_amount, newAmount));
    let newDuration = calculateDuration(newAmount, newMonthly, state.interest);
    
    let newState = {
        'monthly' : newMonthly,
        'duration' : newDuration,
        'amount' : newAmount
    };

    return newState;
}

/**
 * Init the monthly state.
 */
export function initMonthlyState(state) {
    return {
        'monthly' : calculateMonthly(state.amount, state.duration, state.interest),
        'min_monthly' : calculateMonthly(state.min_amount, state.max_duration, state.interest),
        'max_monthly' : calculateMonthly(state.max_amount, state.min_duration, state.interest)
    };
}