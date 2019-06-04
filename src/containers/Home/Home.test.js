import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";
import { mapStateToProps } from "./Home";
import { mapDispatchToProps } from "./Home";
import { addBikePaths, hasErrored, isLoading } from "../../actions";

describe("Home", () => {
  let wrapper;
  let mockBikePaths = [
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
    wrapper = shallow(<Home />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe("componentDidMount", () => {
    it("should fetch data using correct params", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockBikePaths)
        })
      );
      const expected = "http://api.citybik.es/v2/networks";
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should set state error when fetch fails", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false
        })
      );
      const expected = { error: Error("Failed to get bikepaths") };
      await wrapper.instance().componentDidMount();
      expect(wrapper.state()).toEqual(expected);
    });
  });
  describe("mapStateToProps", () => {
    it("should return an object with the bikePaths array", () => {
      const mockState = {
        bikePaths: mockBikePaths
      };
      const expected = {
        bikePaths: mockBikePaths
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    it("should return an object with the hasErrored string", () => {
      const mockState = {
        hasErrored: ""
      };
      const expected = {
        hasErrored: ""
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
    it("should return an object with the isLoading bool", () => {
      const mockState = {
        isLoading: false
      };
      const expected = {
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  describe("mapDispatchToProps", () => {
    it("calls dispatch with an addPath action when mounting", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addBikePaths(mockBikePaths);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addPath(mockBikePaths);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("calls dispatch with a hasErrored action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = hasErrored("error");
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.hasErrored("error");
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("calls dispatch with an isLoading action", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(false);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.isLoading(false);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
