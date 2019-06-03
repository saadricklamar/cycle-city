import { bikePaths } from './bikePaths';
import * as actions from '../../actions';

describe('bikePaths', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = bikePaths(undefined, {});
        expect(result).toEqual(expected);
    });
    it('should return state with bike paths', () => {
        const expected = [
            {
            company: ["Nextbike GmbH"],
            href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
            id: "healthy-ride-pittsburgh-pittsburgh",
            location: {city: "Pittsburgh", country: "US", latitude: 40.4459, longitude: -79.9945},
            name: "Healthy Ride"
            }
        ]
        const result = bikePaths(undefined, actions.addBikePaths([
            {
            company: ["Nextbike GmbH"],
            href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
            id: "healthy-ride-pittsburgh-pittsburgh",
            location: {city: "Pittsburgh", country: "US", latitude: 40.4459, longitude: -79.9945},
            name: "Healthy Ride"
            }
        ]))
        expect(result).toEqual(expected);
    });
});