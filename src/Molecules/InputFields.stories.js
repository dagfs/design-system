import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { InputField } from "./InputFields";

storiesOf("Moleclues/Input", module).addWithJSX(
  "InputField",
  () => <InputField label={"Input"} />,
  {
    notes: { markdown: "Markdown" }
  }
);
