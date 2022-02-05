import React from "react";
import Input from "./components/Input";
import Wrapper from "./components/Wrapper";
import logo from "./assets/logo.svg";
import TipAmounts from "./components/TipAmounts";

const App: React.FC = () => {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="SPLITTER Logo" />
      <Wrapper class="wrapper">
        <Wrapper class="wrapper__inner_left">
          <Input type="number" label="Bill" icon="dollar" name="bill" />
          <TipAmounts />
          <Input
            type="number"
            label="Number of People"
            icon="person"
            name="NumOfPeople"
          />
        </Wrapper>
        <Wrapper class="wrapper__inner_right">
          <p>Tip Amount</p>
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default App;
