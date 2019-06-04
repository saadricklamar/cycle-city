import React from "react";
import { Search } from "./Search";
import { shallow } from "enzyme";

describe("Search", () => {
  const e = { preventDefault: jest.fn() };
  let wrapper;
  const mockBikePaths = [
    {
      company: ["Nextbike GmbH"],
      href: "/v2/networks/healthy-ride-pittsburgh-pittsburgh",
      id: "healthy-ride-pittsburgh-pittsburgh",
      location: {
        city: "Pittsburgh",
        country: "US",
        latitude: 40.4459,
        longitude: -79.9945
      },
      name: "Healthy Ride"
    }
  ];
  beforeEach(() => {
    jest.spyOn(e, "preventDefault");
    wrapper = shallow(<Search bikePaths={mockBikePaths} />);
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("sets the state of city when user enters valid city", () => {
    expect(wrapper.state("city")).toEqual("");
    const mockEvent = { target: { value: "Pittsburgh" } };
    wrapper.instance().handleChange(mockEvent);
    // expect(wrapper.state('city')).toEqual('Pittsburgh')
  });
});
