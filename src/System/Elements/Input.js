import styled from "styled-components";

export const Form = styled.form``;

export const Input = styled.input`
  width: 200px;

  :invalid {
    background-color: pink;
  }

  :focus {
    background-color: white;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-family: sans-serif;
`;
