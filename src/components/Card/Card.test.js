import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

describe("Card", () => {
  const mockLocation = {
    city: "Pittsburgh",
    country: "US",
    latitude: 40.4459,
    longitude: -79.9945
  };
  const mockName = "Healthy Ride";
  let wrapper = shallow(<Card location={mockLocation} name={mockName} />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
