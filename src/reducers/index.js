import { combineReducers } from 'redux';

import atm from './atm';
import client from './client';

export default combineReducers({
    atm,
    client,
});