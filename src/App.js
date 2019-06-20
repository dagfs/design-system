import React from "react";
import Color from "./Atoms/Color";

import styled from "styled-components";
import { Img } from "./Atoms/Img";
import { Form } from "./Atoms/Input";
import { InputField } from "./Molecules/InputFields";
import { H1 } from "./Atoms/Typografi";

function App() {
  return (
    <Page>
      <header>
        <Img src={"/Tranch_logo.png"} />
      </header>
      <H1>Text</H1>
      <Form>
        <InputField label={"Name"} type={"text"} />
        <InputField label={"Age"} type={"number"} />
        <InputField label={"Phone"} type={"phone"} />
        <InputField label={"Email"} type={"email"} />
      </Form>
    </Page>
  );
}

const Page = styled.div`
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;
  min-height: 100%;
  background: ${Color.white};
`;

export default App;
