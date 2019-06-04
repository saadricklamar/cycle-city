import React from 'react';
import { Favorites } from './Favorites';
import { shallow } from 'enzyme';


describe('Favorites', () => {
  const mockBikePaths = [{
    company: ["Nextbike GmbH"],
    href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
    id: "healthy-ride-pittsburgh-pittsburgh",
    location: {city: "Pittsburgh", country: "US", latitude: 40.4459, longitude: -79.9945},
    name: "Healthy Ride"
    }]
  let wrapper = shallow(<Favorites bikePaths={mockBikePaths}/>);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});