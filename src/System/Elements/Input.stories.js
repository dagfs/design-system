import React from "react";

import { storiesOf } from "@storybook/react";

import { Input } from "./Input";

storiesOf("System/Elements", module).add("Input", () => <Input />, {
  notes: { markdown: "Markdown" }
});
