import React from "react";
import { Search } from "./Search";
import { shallow } from "enzyme";

describe("Search", () => {
  const e = { preventDefault: () => {} };
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
  it("should call preventDefault when the form is submitted", () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
  it("sets the state of city when user enters valid city", () => {
    expect(wrapper.state("city")).toEqual("");
    const mockEvent = { target: { value: "Pittsburgh" } };
    wrapper.instance().handleChange(mockEvent);
    wrapper.setState({ city: "Pittsburgh" });
    expect(wrapper.state("city")).toEqual("Pittsburgh");
  });
  it("sets the state of path when user enters valid city", () => {
    expect(wrapper.state("path")).toEqual({} || "");
    const mockEvent = { target: { value: "Pittsburgh" } };
    wrapper.instance().handleChange(mockEvent);
    wrapper.setState({
      path: {
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
    });
    expect(wrapper.state("path")).toEqual({
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
    });
  });
  it("sets the state of path to city not found when invalid city is entered", () => {
    expect(wrapper.state("path")).toEqual({} || "");
    const mockEvent = { target: { value: "Cheyenne" } };
    wrapper.instance().handleChange(mockEvent);
    wrapper.setState({ path: "Your city was not found" });
    expect(wrapper.state("path")).toEqual("Your city was not found");
  });
});
