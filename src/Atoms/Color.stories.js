import React from "react";

import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import Color from "./Color";
const ColorBox = ({ color }) => {
  return <ColorWrapper color={color}>{color}</ColorWrapper>;
};
const ColorWrapper = styled.div`
  padding: 10px;
  width: 200px;
  height: 50px;
  background-color: ${props => props.color};
`;

storiesOf("Atoms", module).add(
  "Color",
  () => (
    <div>
      <ColorBox color={Color.red} />
      <ColorBox color={Color.green} />
      <ColorBox color={Color.blue} />
      <ColorBox color={Color.black} />
      <ColorBox color={Color.white} />
    </div>
  ),
  {
    notes: { markdown: "Markdown" }
  }
);
