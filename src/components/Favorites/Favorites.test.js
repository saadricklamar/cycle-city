import React from 'react';
import { Favorites } from './Favorites';
import { shallow } from 'enzyme';
import { mapStateToProps } from './Favorites';


describe('Favorites', () => {
  let wrapper;
  const mockBikePaths = [{
    company: ["Nextbike GmbH"],
    href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
    id: "healthy-ride-pittsburgh-pittsburgh",
    location: {city: "Pittsburgh", country: "US", latitude: 40.4459, longitude: -79.9945},
    name: "Healthy Ride"
    }]
  beforeEach(() => {
      wrapper = shallow(<Favorites bikePaths={mockBikePaths}/>);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return an object with the bikePaths array', () => {
        const mockState = {
            bikePaths: mockBikePaths
        }
        const expected = {
            bikePaths: mockBikePaths
        }
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
    }); 
  });
});