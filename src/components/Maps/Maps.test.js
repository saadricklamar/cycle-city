import React from 'react';
import Maps from './Maps';
import { shallow } from 'enzyme';

describe('Maps', () => {
    const mockPath=  {
        company: ["Nextbike GmbH"],
        href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
        id: "healthy-ride-pittsburgh-pittsburgh",
        location: {city: "Pittsburgh", country: "US", latitude: 40.4459, longitude: -79.9945},
        name: "Healthy Ride"
        };
    const mockRedirect = jest.fn();
    const mockToggleFavorite = jest.fn();
    let wrapper = shallow(<Maps path={mockPath}
                              redirect={mockRedirect}
                              toggleFavorite={mockToggleFavorite}
                        />);
    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});