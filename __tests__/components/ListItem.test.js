import React from "react";
import renderer from "react-test-renderer";

import ListItem from "../../src/components/ListItem";

describe("<ListItem />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(
        <ListItem
          item={{
            name: "name",
            createdAt: new Date().toLocaleString(),
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg"
          }}
        />
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ListItem
          item={{
            name: "name",
            createdAt: new Date(2019, 11, 17).toLocaleString(),
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg"
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
