import React from "react";
import styled from "styled-components";

import Home from "./pages/Home";

const AppWrapper = styled.div`
  background-color: #fff;
  height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
