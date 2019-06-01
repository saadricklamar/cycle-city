import * as actions from '../actions';


describe('actions', () => {
    it('should have a type of ADD_BIKE_PATHS', () => {
        const bikePaths = []
        const expectedAction = {
            type: 'ADD_BIKE_PATHS',
            bikePaths: []
        }
        const result = actions.addBikePaths(bikePaths);
        expect(result).toEqual(expectedAction)
    })
})