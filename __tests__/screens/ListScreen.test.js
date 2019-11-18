import React from "react";
import renderer from "react-test-renderer";

import ListScreen from "../../src/screens/ListScreen";

describe("ListScreen", () => {
  it("fetches data from server when server returns a successful response", done => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const navigationMock = { navigate: jest.fn() };

    const tree = renderer
      .create(<ListScreen navigation={navigationMock} />)
      .toJSON();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://5ca369c58bae720014a9623e.mockapi.io/data"
    );

    process.nextTick(() => {
      expect(tree.children.length).toBe(50);

      global.fetch.mockClear();
      done();
    });
  });
});

// describe("<ListScreen />", () => {
//   it("has 1 child", () => {
//     const navigation = {
//       navigate: Function.prototype,
//       setParams: Function.prototype,
//       dispatch: Function.prototype,
//       getParam: (param, defaultValue) => {
//         return defaultValue;
//       }
//     };
//     const tree = renderer
//       .create(<ListScreen navigation={navigation} />)
//       .toJSON();
//     console.log(tree);
//     //expect(tree.children[0].children.length).toBe(1);
//   });

//   it("renders correctly", () => {
//     const navigation = {
//       navigate: Function.prototype,
//       setParams: Function.prototype,
//       dispatch: Function.prototype,
//       getParam: (param, defaultValue) => {
//         return defaultValue;
//       }
//     };
//     const tree = renderer
//       .create(<ListScreen navigation={navigation} />)
//       .toJSON();
//     expect(tree).toBeTruthy();
//     expect(tree).toMatchSnapshot();
//   });
// });
