import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AtmKeypadAction } from '../../actions/index';
import { FUNCTION_DIALS } from '../../constants/dial-types';

import './styles.scss';

const FunctionDials = ({ action }) => (
    <div className="FunctionDials">
        {FUNCTION_DIALS.map(key => (
            <button
                className={`FunctionDials__key FunctionDials__key--${key.value}`}
                key={key.key}
                onClick={() => action(key.value)}
            >
                {key.key}
            </button>
        ))}
    </div>
);

FunctionDials.propTypes = {
    action: PropTypes.func.isRequired,
};

const mapActions = (dispatch) => ({
    action: (key) => dispatch(AtmKeypadAction(key)),
});

export default connect(null, mapActions)(FunctionDials);