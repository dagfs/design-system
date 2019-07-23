import React from "react";

import { storiesOf } from "@storybook/react";
import { Img } from "../Elements/Img";

storiesOf("System", module).add("Images", () => (
  <div>
    <h1>Frequently used photos and how to use them</h1>
    <h2>Tram</h2>
    <Img
      width="400px"
      src="https://images.pexels.com/photos/1753483/pexels-photo-1753483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <h4>
      https://images.pexels.com/photos/1753483/pexels-photo-1753483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
    </h4>

    <h2>Train</h2>
    <Img
      width="400px"
      src="https://images.pexels.com/photos/433301/pexels-photo-433301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <h4>
      https://images.pexels.com/photos/433301/pexels-photo-433301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
    </h4>

    <h2>Bus</h2>
    <Img
      width="400px"
      src="https://images.pexels.com/photos/2085503/pexels-photo-2085503.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
    <h4>
      https://images.pexels.com/photos/2085503/pexels-photo-2085503.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
    </h4>
  </div>
));
