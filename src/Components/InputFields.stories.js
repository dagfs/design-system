import React from "react";

import { storiesOf } from "@storybook/react";
import { InputField } from "./InputFields";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
// https://www.npmjs.com/package/@storybook/addon-knobs

const stories = storiesOf("Components", module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  "InputField",
  () => {
    const label = "Type";
    const values = ["text", "number", "email"];
    const optionsObj = {
      display: "inline-radio"
    };
    const value = options(label, values, values[0], optionsObj);
    return <InputField type={value} label={"Input"} />;
  },
  {
    notes: { markdown: "Markdown" }
  }
);

// https://storybook.js.org/docs/basics/writing-stories/
