import React from "react";
import renderer from "react-test-renderer";

import DetailScreen from "../../src/screens/DetailScreen";

describe("<DetailScreen />", () => {
  it("has 1 child", () => {
    const navigation = {
      navigate: Function.prototype,
      setParams: Function.prototype,
      dispatch: Function.prototype,
      getParam: (param, defaultValue) => {
        return defaultValue;
      }
    };

    const tree = renderer
      .create(<DetailScreen navigation={navigation} />)
      .toJSON();
    expect(tree.children.length).toBe(3);
  });

  it("renders correctly", () => {
    const navigation = {
      navigate: Function.prototype,
      setParams: Function.prototype,
      dispatch: Function.prototype,
      getParam: (param, defaultValue) => {
        return defaultValue;
      }
    };
    const tree = renderer
      .create(<DetailScreen navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
