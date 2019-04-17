import React from 'react';
import PropTypes from 'prop-types';

import Screen from '../Screen';
import Dials from '../Dials';
import FunctionDials from '../FunctionDials';

import './styles.scss';

export const Machine = ({ atm, withdrawKey }) => (
    <div className="Machine">
        <Screen type="Withdraw" current={atm.withdrawal} />
        <Dials action={withdrawKey} />
        <FunctionDials />
    </div>
);

Machine.propTypes = {
    atm: PropTypes.shape({
        withdrawal: PropTypes.number,
        availableNotes: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    withdrawKey: PropTypes.func.isRequired,
}

export default Machine;
