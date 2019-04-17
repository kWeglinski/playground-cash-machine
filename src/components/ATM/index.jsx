import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { atmWithdrawKey } from '../../actions/index';
import Payout from '../Payout';
import Machine from '../Machine';

const ATM = ({ atm, withdrawKey }) => (
    <div className="ATM">
        <Machine withdrawKey={withdrawKey} atm={atm} />
        <Payout notes={atm.payoutNotes} />
    </div>
);

ATM.propTypes = {
    atm: PropTypes.shape({
        withdrawal: PropTypes.number,
        availableNotes: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    withdrawKey: PropTypes.func.isRequired,
} 

const mapState = (state) => {
    const { atm } = state;
    return { atm };
}

const mapActions = (dispatch) => ({
    withdrawKey: (key) => dispatch(atmWithdrawKey(key)),
});

export default connect(mapState, mapActions)(ATM);
