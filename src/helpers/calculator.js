export function calculateMonthlyAmount(amount, duration, interest) {
    return (amount * (interest / 12)) /( 1 - Math.pow(1 + (interest/12), -1*duration));
}