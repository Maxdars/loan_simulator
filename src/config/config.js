export const config = {
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
    'interest': 0.08,
    'min_interest': 0.01,
    'max_interest': 0.2,
    'interest_step': 0.01,
    'profile': 'employee',
    'profile_label': 'Employee',
    'profiles': [
        {
            'id': 'company',
            'label': 'Company',
            'min_amount': 5000,
            'max_amount': 250000,
            'min_duration': 6,
            'max_duration': 84
        },
        {
            'id': 'contractor',
            'label': 'Contractor',
            'min_amount': 10000,
            'max_amount': 500000,
            'min_duration': 12,
            'max_duration': 144
        },
        {
            'id': 'employee',
            'label': 'Employee',
            'min_amount': 6000,
            'max_amount': 150000,
            'min_duration': 6,
            'max_duration': 114
        }
    ],
    'fixed_amounts': [5000, 10000, 50000, 100000, 250000],
    'fixed_durations': [12, 24, 48, 62, 84],
    'open_simulator': 1,
    'use_profiles': 0
}