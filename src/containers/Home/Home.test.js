import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import { mapStateToProps } from './Home';
import { mapDispatchToProps } from './Home';
import { addBikePaths } from '../../actions';

describe('Home', () => {
    let wrapper;
    let bikePaths = [
        {
        company: ["Nextbike GmbH"],
        href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
        id: "healthy-ride-pittsburgh-pittsburgh",
        location: {city: "Pittsburgh", country: "US", latitude: 40.4459, longitude: -79.9945},
        name: "Healthy Ride"
        }
    ]
    // beforeEach(() => {
    //     wrapper = shallow(<Home/>);
    // });
    it.skip('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('mapStateToProps', () => {
        it('should return an object with the bikePaths array', () => {
            const mockState = {
                bikePaths: bikePaths
            }
            const expected = {
                bikePaths: bikePaths
            }
            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected);
        })  
    })
})