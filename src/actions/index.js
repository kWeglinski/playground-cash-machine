import { ATM_KEYPAD_ACTION, ATM_WITHDRAW_KEY, ATM_WITHDRAW_SET } from "../constants/action-types";

export const atmWithdrawKey = (payload) => ({ type: ATM_WITHDRAW_KEY, payload});
export const atmWithdrawSet = (payload) => ({ type: ATM_WITHDRAW_SET, payload});
export const AtmKeypadAction = (payload) => ({ type: ATM_KEYPAD_ACTION, payload});