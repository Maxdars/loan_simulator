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

export function changeInterest (e) {
    return {
        type: 'CHANGE_INTEREST',
        payload: e.target.value
    }
}

export function changeMonthly (e) {
    return {
        type: 'CHANGE_MONTHLY',
        payload: e.target.value
    }
}

export function initState (initialData) {
    return {
        type: 'INIT',
        payload: initialData
    }
}