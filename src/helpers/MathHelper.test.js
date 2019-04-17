import { notes, notesToArray, digitRemove, digitInput } from './MathHelper';

describe('notes', () => {
    it('calculates number of each note needed to provide lowest quantity of notes', () => {
        expect(notes(110, [10, 20])).toEqual({ 20: 5, 10: 1 });
    });
    it('returns error if cannot return expected number using available notes', () => {
        expect(notes(111, [10, 20])).toEqual({ error: 'Unavailable note, please provide value divisible by 10' });
    });
    it('returns error if not natural number', () => {
        expect(notes(-10, [10, 20])).toEqual({ error: 'Invalid Argument, please provide natural number' })
        expect(notes(10.5, [10, 20])).toEqual({ error: 'Invalid Argument, please provide natural number' })
    });
    it('returns empty set when value is 0 or null', () => {
        expect(notes(0, [10, 20])).toEqual({});
        expect(notes(undefined, [10, 20])).toEqual({});
    })
});

describe('notesToArray', () => {
    it('returns notes as an array where each element represents each note', () => {
        expect(notesToArray({ 20: 2, 10: 3 })).toEqual([10, 10, 10, 20, 20]);
    });
})

describe('digitRemove', () => {
   it('removes last digit', () => {
        expect(digitRemove(100)).toEqual(10);
        expect(digitRemove(123)).toEqual(12);
        expect(digitRemove(9)).toEqual(0);
        expect(digitRemove(0)).toEqual(0);
   });
});

describe('digitInput', () => {
    it('inputs new digit', () => {
        expect(digitInput(100, 1)).toEqual(1001);
        expect(digitInput(0, 0)).toEqual(0);
        expect(digitInput(0, 1)).toEqual(1);
    })
})