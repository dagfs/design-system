import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../Atoms/Img";

const LinkCardContainer = styled(Link)`
  display: block;
  box-shadow: 2px 2px 5px grey;
  margin: 10px;

  :hover {
    box-shadow: 2px 2px 5px black;
    outline: 1px solid black;
  }

  :focus {
    box-shadow: 2px 2px 5px black;
    outline: 1px solid black;
  }
`;

const LinkCardContent = styled.div`
  padding: 10px;
`;

export default ({ to, img, children }) => (
  <LinkCardContainer to={to}>
    <Img src={img} />
    <LinkCardContent>{children}</LinkCardContent>
  </LinkCardContainer>
);
