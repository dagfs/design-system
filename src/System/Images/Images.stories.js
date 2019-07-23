import React from "react";

import { storiesOf } from "@storybook/react";
import { Img } from "../Elements/Img";

storiesOf("System", module).add("Images", () => (
  <div>
    <h1>Frequently used photos and how to use them</h1>
    <Img src="https://picsum.photos/id/945/500/300" />
    <Img src="https://picsum.photos/id/932/500/320" />
    <Img src="https://picsum.photos/id/944/480/300" />
  </div>
));
