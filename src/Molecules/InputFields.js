import React from "react";

import styled from "styled-components";
import { Label, Input } from "../Atoms/Input";

export const InputField = ({ label, value, type }) => (
  <Label>
    <LabelWrapper>{label}</LabelWrapper>
    <Input value={value} type={type} />
  </Label>
);

const LabelWrapper = styled.span`
  display: inline-block;
  width: 100px;
`;
