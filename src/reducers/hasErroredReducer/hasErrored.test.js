import * as actions from '../../actions/';
import  hasErrored  from './hasErrored';

describe('hasErroredReducer', () => {
    it('should return the initial state', () => {
        const expected = '';
        const result = hasErrored(undefined, {});
        expect(result).toEqual(expected)
    });
    it('should return state with error', () => {
        const mockState = [{number: 1, president: "George Washington", birth_year: 1732, death_year: 1799, took_office: "1789-04-30", party: "No-Party"}]
        const expected = 'error'
        const result = hasErrored(mockState, actions.hasErrored('error'))
        expect(result).toEqual(expected)
    });
});