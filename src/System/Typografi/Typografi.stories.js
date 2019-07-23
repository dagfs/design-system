import React from "react";

import { storiesOf } from "@storybook/react";

import { H1, H2, H3, H4, P } from "./Typografi";

storiesOf("System", module).addWithJSX(
  "Typografi",
  () => (
    <div>
      <H1>Header 1</H1>
      <H2>Header 2</H2>
      <H3>Header 3 </H3>
      <H4>Header 4</H4>
      <P>Body text</P>
    </div>
  ),
  {
    notes: { markdown: "Markdown" }
  }
);
