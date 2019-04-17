import React from 'react';
import PropTypes from 'prop-types';

import { notesToArray } from '../../helpers/MathHelper'

import './styles.scss';

const Payout = ({ notes = {} }) => {
    if (notes.error) {
        return (<div className="Payout__error">{notes.error}</div>);
    }
    const arrayOfNotes = notesToArray(notes);
    if (arrayOfNotes.length === 0) {
        return null;
    }
    return (
        <div className="Payout">
            <div className="Payout__column">
                Here are your bank notes
                {arrayOfNotes.map((note, i) => (
                    <div className="Payout__note">${note}</div>
                ))}
            </div>
            <div className="Payout__column">
                thats:
                {Object.keys(notes).map(note => (
                    <div key={note}> {notes[note]} of ${note} </div>
                ))}
            </div>
        </div>
    )
}

Payout.propTypes = {
    notes: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    )
}

export default Payout;
