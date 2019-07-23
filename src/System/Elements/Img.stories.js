import React from "react";

import { storiesOf } from "@storybook/react";

import { Img } from "./Img";

storiesOf("System/Elements", module).add(
  "Img",
  () => <Img src="https://picsum.photos/id/945/500/300" />,
  {
    notes: { markdown: "Markdown" }
  }
);
