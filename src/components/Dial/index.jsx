import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Dial = ({ display, action, value }) => <button className="Dial" onClick={() => action(value)} key={value}> {display} </button>;

Dial.propTypes = {
    display: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

export default Dial;
