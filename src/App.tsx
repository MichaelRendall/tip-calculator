import React, { useContext } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import logo from "./assets/logo.svg";
import TipAmounts from "./components/TipAmounts";
import Total from "./components/Total";

import TipContext from "./context/tip-context";
import useCalc from "./hooks/useCalc";

const App: React.FC = () => {
  const tipCtx = useContext(TipContext);
  const [tip, total] = useCalc();

  const onChangeBillHandler = (value: number) => {
    tipCtx.setBill!(value);
  };

  const onChangeTipAmountsHandler = (value: number) => {
    console.log("test");
    tipCtx.setTipPercent!(value);
  };

  const onChangePeopleHandler = (value: number) => {
    tipCtx.setPeople!(value);
  };

  const onResetHandler = () => {
    tipCtx.setBill!(0);
    tipCtx.setTipPercent!(0);
    tipCtx.setPeople!(0);
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="SPLITTER Logo" />
      <Wrapper class="wrapper">
        <Wrapper class="wrapper__inner_left">
          <Input
            type="number"
            label="Bill"
            icon="dollar"
            name="bill"
            value={tipCtx.bill!}
            change={onChangeBillHandler}
          />
          <TipAmounts change={onChangeTipAmountsHandler} />
          <Input
            type="number"
            label="Number of People"
            icon="person"
            name="people"
            value={tipCtx.people!}
            change={onChangePeopleHandler}
          />
        </Wrapper>
        <Wrapper class="wrapper__inner_right">
          <Total text="Tip Amount" figure={+tip} />
          <Total text="Total" figure={+total} />
          <Button text="RESET" class="main" clicked={onResetHandler} />
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default App;
