import { calculateMonthly, calculateAmount, calculateDuration } from '../helpers/calculator';
import { find as _find } from 'lodash';

/**
 * Update the state when the profile changes.
 */
export function updateProfileState(state, newProfile) {
    let newState = {'profile' : newProfile};

    let newProfileOptions = _find(state.profiles, (profile) => {return profile.id === state.profile});
    newState.min_amount = newProfileOptions.min_amount;
    newState.max_amount = newProfileOptions.max_amount;
    newState.min_duration = newProfileOptions.min_duration;
    newState.max_duration = newProfileOptions.max_duration;

    if (state.open_simulator === 0) {
        newState.duration = state.fixed_durations.includes(state.duration) ? state.duration : state.fixed_durations[0];
        newState.amount = state.fixed_amounts.includes(state.amount) ? state.amount : state.fixed_amounts[0];
        newState.interest = state.fixed_interests.includes(state.interest) ? state.interest : state.fixed_interests[0];
    }
    else {
        newState.amount = Math.max(newState.min_amount, Math.min(newState.max_amount, state.amount));
        newState.duration = Math.max(newState.min_duration, Math.min(newState.max_duration, state.duration));
    }
    
    newState.monthly = calculateMonthly(newState.amount, newState.duration, state.interest);

    return newState;
}

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
 * Update the state when the open amount changes.
 */
export function updateOpenAmountState(state, newAmount) {
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
 * Update the state when the open interest changes.
 */
export function updateOpenInterestState(state, newInterest) {
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
 * Update the state when the open duration changes.
 */
export function updateOpenDurationState(state, newDuration) {
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

/**
 * Update the state when the profile option changes.
 */
export function updateProfileOptionState(state, useProfile) { 
    useProfile = state.use_profiles ? 0 : 1;

    let newState = {'use_profiles': useProfile},
        profiles = state.profiles,
        currentProfile = _find(profiles, (profile) => {return profile.id === state.profile});

    if (useProfile === 1) {
        newState.min_amount = currentProfile.min_amount;
        newState.max_amount = currentProfile.max_amount;
        newState.min_duration = currentProfile.min_duration;
        newState.max_duration = currentProfile.max_duration;
        newState.profile_label = currentProfile.profile_label;

        if (state.open_simulator === 0) {
            newState.duration = state.fixed_durations.includes(state.duration) ? state.duration : state.fixed_durations[0];
            newState.amount = state.fixed_amounts.includes(state.amount) ? state.amount : state.fixed_amounts[0];
            newState.interest = state.fixed_interests.includes(state.interest) ? state.interest : state.fixed_interests[0];
        }
        else {
            let newDuration = Math.max(newState.min_duration, Math.min(newState.max_duration, state.duration));
            let newAmount = Math.max(newState.min_amount, Math.min(newState.max_amount, state.amount));
            newState.amount = newAmount;
            newState.duration = newDuration;
        }
        
        newState.monthly = calculateMonthly(newState.amount, newState.duration, state.interest);
        newState.min_monthly = calculateMonthly(newState.min_amount, newState.max_duration, state.interest);
        newState.max_monthly = calculateMonthly(newState.max_amount, newState.min_duration, state.interest);
    }

    return newState;
}

/**
 * Update the state when the open option changes.
 */
export function updateOpenOptionState(state, open_simulator) { 
    open_simulator = state.open_simulator ? 0 : 1;
    let newState = {'open_simulator': open_simulator};

    if (open_simulator === 0) {
        newState.duration = state.fixed_durations.includes(state.duration) ? state.duration : state.fixed_durations[0];
        newState.amount = state.fixed_amounts.includes(state.amount) ? state.amount : state.fixed_amounts[0];
        newState.interest = state.fixed_interests.includes(state.interest) ? state.interest : state.fixed_interests[0];
    }
    else {
        newState.duration = Math.max(state.min_duration, Math.min(state.max_duration, state.duration));
        newState.amount = Math.max(state.min_amount, Math.min(state.max_amount, state.amount));
        newState.interest = Math.max(state.min_interest, Math.min(state.max_interest, state.interest));
    }


    newState.monthly = calculateMonthly(newState.amount, newState.duration, newState.interest);

    return newState;
}