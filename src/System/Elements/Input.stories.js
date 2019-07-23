import React from "react";

import { storiesOf } from "@storybook/react";

import { Form, Input } from "./Input";

storiesOf("System/Elements", module).add("Input", () => <Input />, {
  notes: { markdown: "Markdown" }
});
