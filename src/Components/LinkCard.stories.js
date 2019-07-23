import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { storiesOf } from "@storybook/react";
import LinkCard from "./LinkCard";
import { H2, P } from "../System/Typografi/Typografi";
// https://www.npmjs.com/package/@storybook/addon-knobs

const stories = storiesOf("Components", module);

stories.addWithJSX(
  "LinkCard",
  () => {
    return (
      <Router>
        <LinkCard
          to="/tram"
          img={
            "https://images.pexels.com/photos/1753483/pexels-photo-1753483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        >
          <H2> We are lookingfor tram drivers!</H2>
          <P>Are you our next tram driver?</P>
        </LinkCard>
      </Router>
    );
  },
  {
    notes: { markdown: "Markdown" }
  }
);
