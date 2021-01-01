export function changeAmount (e) {
    return {
        type: 'CHANGE_AMOUNT',
        payload: e.target.value
    }
}

export function changeDuration (e) {
    return {
        type: 'CHANGE_DURATION',
        payload: e.target.value
    }
}

export function changeOpenAmount (e) {
    return {
        type: 'CHANGE_OPEN_AMOUNT',
        payload: e.target.value
    }
}

export function changeOpenDuration (e) {
    return {
        type: 'CHANGE_OPEN_DURATION',
        payload: e.target.value
    }
}

export function changeInterest (e) {
    return {
        type: 'CHANGE_INTEREST',
        payload: e.target.value
    }
}
export function changeOpenInterest (e) {
    return {
        type: 'CHANGE_OPEN_INTEREST',
        payload: e.target.value
    }
}

export function changeMonthly (e) {
    return {
        type: 'CHANGE_MONTHLY',
        payload: e.target.value
    }
}

export function changeProfile (e) {
    return {
        type: 'CHANGE_PROFILE',
        payload: e.target.value
    }
}

export function toggleProfileOption (e) {
    return {
        type: 'TOGGLE_PROFIL',
        payload: e.target.value
    }
}

export function toggleOpenOption (e) {
    return {
        type: 'TOGGLE_OPEN',
        payload: e.target.value
    }
}

export function initState (initialData) {
    return {
        type: 'INIT',
        payload: initialData
    }
}