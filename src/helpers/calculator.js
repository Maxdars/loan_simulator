/**
 * Calculate monthly value.
 * For the used formula, see: https://formulecredit.com/mensualite.php
 */
export const calculateMonthly = (amount, duration, interest) => {
    let a = amount * parseFloat(interest / 12);
    let b = 1 + (interest / 12);
    let c = 1 - Math.pow(b, (-1 * duration));

    let result = parseFloat(a / c);

    // return Math.round(result);
    return result.toFixed(2);
}

/**
 * Calculate the amount when the monthly value is changed.
 */
export const calculateAmount = (duration, monthly, interest) => {
    let a = 1 + parseFloat(interest / 12),
        b = 1 - Math.pow(a, (-1 * duration)),
        c = parseFloat((monthly * b * 12) / interest) 

    return Math.round(c);
}

/**
 * Calculate the duration when the monthly value is changed.
 */
export const calculateDuration = (amount, monthly, interest) => {
    let a = amount * parseFloat(interest / 12);
    let b = parseFloat(1 / (1 - (a / monthly)));
    let c = Math.log(b) / Math.log(parseFloat(1 + interest / 12));

    return Math.round(c);
}