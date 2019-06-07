import React from "react";

import styled from "styled-components";
import { Label, Input } from "../Atoms/Input";

export const InputField = ({ label }) => (
  <Label>
    {label}
    <Input />
  </Label>
);
