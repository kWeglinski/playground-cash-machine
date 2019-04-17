import { ATM_KEYPAD_ACTION, ATM_WITHDRAW_KEY, ATM_WITHDRAW_SET } from '../constants/action-types';
import { digitInput, notes, digitRemove } from '../helpers/MathHelper';

const atmWithdrawActionKeysHandler = (state, type) => {
    switch (type) {
        case 'enter':
            const payoutNotes = notes(state.withdrawal, state.availableNotes);
            return { payoutNotes }; 

        case 'clear':
            return { withdrawal: digitRemove(state.withdrawal) };

        default:
            return { withdrawal: 0 };
    }
}
export default function atm(state = {}, action) {
    switch (action.type) {
        case ATM_KEYPAD_ACTION:
            return Object.assign({}, state, atmWithdrawActionKeysHandler(state, action.payload));
            
        case ATM_WITHDRAW_KEY:
            return Object.assign({}, state, {
                withdrawal: digitInput(state.withdrawal, action.payload),
            });

        case ATM_WITHDRAW_SET:
            return Object.assign({}, state, {
                withdrawal: action.payload,
            })

        default:
            return state
    }
} 