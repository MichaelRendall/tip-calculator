import React from "react";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>
        SPLI
        <br />
        TTER
      </h1>
      <Wrapper>
        <Input type="number" label="Bill" icon="dollar" name="bill" />
      </Wrapper>
    </div>
  );
};

export default App;
