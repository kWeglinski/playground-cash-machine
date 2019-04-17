/**
 * Adds new input on the side of current one i.e. 1+0 === 10, 41+5 = 415
 * @param {Number} value - current value 
 * @param {Number} digit - digit to add 
 * @returns {Number}
 */
export const digitInput = (value, digit) => {
    if (digit === null) {
        return value;
    }
    return value === 0 ? digit : parseInt(`${value}${digit}`); 
}

/**
 * Removes last applied digit or resets to 0 
 * @param {Number} value - current value
 * @returns {Number} new value
 */
export const digitRemove = (value) => {
    const stringified = value.toString();
    const length = stringified.length;
    if (length === 1) {
        return 0;
    }
    return parseInt(stringified.substr(0, length - 1));
}

/**
 * Calculates number of notes providing minimum total quantity
 * @param {Number} value - total amount 
 * @param {Array} availableNotes - machine available notes 
 * @returns {Object} number of each notes or error message
 */
export const notes = (value = 0, availableNotes) => {
    const isPositive = Math.abs(value) === value || value === 0;
    const isInteger = parseInt(value) === value;
    if (!isPositive || !isInteger) {
        return { error: 'Invalid Argument, please provide natural number' };
    }

    const sortedNotes = availableNotes.sort((a, b) => b - a);
    const aggregate = {};
    let remaining = value;

    sortedNotes.forEach(note => {
        if (note > remaining) {
            return;
        }
        aggregate[note] = Math.floor(remaining / note);
        remaining = remaining % note;
    })
    if (remaining !== 0) {
        return { error: `Unavailable note, please provide value divisible by ${Math.min(...availableNotes)}`}
    }
    return aggregate;
}

/**
 * Converts object that represents qty of each note
 * into an array that represents each note literally
 * @param {Object} payoutNotes - qty of each note 
 * @returns {Array}  literal representation of each note
 */
export const notesToArray = (payoutNotes = {}) => {
    const notes = Object.keys(payoutNotes);
    let aggregate = [];

    notes.forEach(note => {
        const qty = payoutNotes[note];
        const notesArray = Array.apply(null, { length: qty }).map(() => parseInt(note));
        aggregate = [...aggregate, ...notesArray];
    });
    return aggregate;
}