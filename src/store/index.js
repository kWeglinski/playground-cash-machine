import { createStore } from "redux";
import rootReducer from "../reducers/index";

const initialState = {
    client: {
        balance: Infinity,
    },
    atm: {
        withdrawal: 0,
        availableNotes: [100, 50, 20, 10],
    },
};

const store = createStore(rootReducer, initialState);

export default store;