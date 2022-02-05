import { useState, useEffect, useContext } from "react";
import TipContext from "../context/tip-context";

const useCalc = () => {
  const tipCtx = useContext(TipContext);

  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (tipCtx.bill === 0 || tipCtx.tipPercent === 0 || tipCtx.people === 0) {
      setTip(0);
      setTotal(0);
    } else {
      const tipCalc =
        ((tipCtx.bill! / 100) * tipCtx.tipPercent!) / tipCtx.people!;
      const totalCalc =
        ((tipCtx.bill! / 100) * tipCtx.tipPercent! + tipCtx.bill!) /
        tipCtx.people!;
      setTip(+tipCalc);
      setTotal(+totalCalc);
    }
  }, [tipCtx.bill, tipCtx.tipPercent, tipCtx.people]);

  return [tip, total, setTip, setTotal];
};

export default useCalc;
