import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Form, Input } from "./Input";

storiesOf("Atoms/Input", module).add("Form", () => <Form />, {
  notes: { markdown: "Markdown" }
});

storiesOf("Atoms/Form", module).add("Form", () => <Form />, {
  notes: { markdown: "Markdown" }
});

storiesOf("Atoms/Input", module)
  .add("Input", () => <Input />, {
    notes: { markdown: "Markdown" }
  })
  .add("Number Input", () => <Input type="number" />, {
    notes: { markdown: "Markdown" }
  });
