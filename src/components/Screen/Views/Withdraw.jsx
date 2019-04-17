import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dial from '../../Dial';
import { SUGGESTED_AMOUNTS } from '../../../constants/suggested-amounts';
import { atmWithdrawSet } from '../../../actions/index';

const Withdraw = ({ current, setWithdraw }) => (
    <div>
        <p className="Screen__info">Choose an amount</p>
        {SUGGESTED_AMOUNTS.map(key => <Dial value={key} display={key} key={key} action={setWithdraw} />)}
        <p className="Screen__info">or enter another amount and press 'enter'.</p>
        <p className="Screen__info_important"> ${current} </p>
    </div>
);

Withdraw.propTypes = {
    current: PropTypes.number.isRequired,
    setWithdraw: PropTypes.func.isRequired,
};

const mapActions = (dispatch) => ({
    setWithdraw: (value) => dispatch(atmWithdrawSet(value)),
});

export default connect(null, mapActions)(Withdraw);
