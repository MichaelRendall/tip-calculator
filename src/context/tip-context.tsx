import React, { useState } from "react";

interface CtxInterface {
  bill: number;
  tipPercent: number;
  people: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTipPercent: React.Dispatch<React.SetStateAction<number>>;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
}

const TipContext = React.createContext<Partial<CtxInterface>>({});

export const TipContextProvider: React.FC = (props) => {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <TipContext.Provider
      value={{
        bill: bill,
        tipPercent: tipPercent,
        people: people,
        setBill: setBill,
        setTipPercent: setTipPercent,
        setPeople: setPeople,
      }}
    >
      {props.children}
    </TipContext.Provider>
  );
};

export default TipContext;
