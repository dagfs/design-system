import React from "react";

import { storiesOf } from "@storybook/react";

import { H1, H2, H3, H4, P } from "./Typografi";

storiesOf("System", module).addWithJSX(
  "Typografi",
  () => (
    <div>
      <H1>{"<H1>"} - Header 1</H1>
      <H2>{"<H2>"} - Header 2</H2>
      <H3>{"<H3>"} - Header 3 </H3>
      <H4>{"<H4>"} - Header 4</H4>
      <P>{"<P>"} - Body text</P>

      <p>We use the font Roboto - https://fonts.google.com/specimen/Roboto</p>

      <pre>
        {`
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">`}

        {`
  
{
font-family: 'Roboto', sans-serif;
}
  `}
      </pre>
    </div>
  ),
  {
    notes: { markdown: "Markdown" }
  }
);
