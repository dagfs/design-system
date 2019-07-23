import React from "react";
import LinkCard from "../Components/LinkCard";
import { H2, P } from "../System/Typografi/Typografi";

export default () => (
  <div>
    <LinkCard
      to="/tram"
      img={
        "https://images.pexels.com/photos/1753483/pexels-photo-1753483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    >
      <H2> We are lookingfor tram drivers!</H2>
      <P>Are you our next tram driver?</P>
    </LinkCard>
  </div>
);
