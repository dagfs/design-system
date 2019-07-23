import React from "react";
import Color from "./System/Color/Color";

import { BrowserRouter as Router, Route } from "react-router-dom";

import styled from "styled-components";
import { Img } from "./System/Elements/Img";
import Tram from "./Pages/Tram";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Page>
        <header>
          <Img src={"/Tranch_logo.png"} />
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/tram" component={Tram} />
      </Page>
    </Router>
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
