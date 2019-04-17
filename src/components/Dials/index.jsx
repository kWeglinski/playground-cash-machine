import React from 'react';
import PropTypes from 'prop-types';

import { NUMERIC_DIALS } from '../../constants/dial-types';

import './styles.scss';

const Dials = ({ action }) => {
    return (
        <div className="Dials">
            {NUMERIC_DIALS.map((elem, i) => (
                <div className="Dials__key_container">
                    <button className="Dials__key"
                        onClick={() => action(elem.value)}
                        key={i}
                    >
                        {elem.key}
                    </button>
                </div>
            ))}
        </div>
    );
}

Dials.propTypes = {
    action: PropTypes.func.isRequired,
};

export default Dials;
