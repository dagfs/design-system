import React from "react";

import styled from "styled-components";
import { Label, Input } from "../System/Elements/Input";

export const InputField = ({ label, value, type, ...args }) => (
  <Label>
    <LabelWrapper>{label}</LabelWrapper>
    <Input {...args} value={value} type={type} />
  </Label>
);

const LabelWrapper = styled.span`
  display: inline-block;
  width: 100px;
`;
