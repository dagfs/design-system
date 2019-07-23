import React from "react";

import { Form } from "../System/Elements/Input";
import { InputField } from "../Components/InputFields";
import { H1 } from "../System/Typografi/Typografi";

export default () => (
  <div>
    <H1>Text</H1>
    <Form>
      <InputField label={"Name"} type={"text"} />
      <InputField label={"Age"} type={"number"} />
      <InputField label={"Phone"} pattern="[0-9]*" type={"tel"} />
      <InputField label={"Email"} type={"email"} />
    </Form>
  </div>
);
