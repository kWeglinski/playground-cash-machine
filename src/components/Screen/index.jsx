import React from 'react';
import PropTypes from 'prop-types';

import Views from './Views';

import './styles.scss';

const Screen = ({ type, current }) => {
    const View = Views[type] || <div> Error </div>;
    return (
        <div className="Screen">
            <View current={current} />
        </div>
    );
}

Screen.propTypes = {
    type: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
}

export default Screen;

