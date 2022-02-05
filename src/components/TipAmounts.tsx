import React from "react";
import Button from "./Button";
import Input from "./Input";
import classes from "./TipAmounts.module.scss";

interface TipAmountsProps {
  change: (value: number) => void;
}

const TipAmounts: React.FC<TipAmountsProps> = (props) => {
  const TIP_AMOUNTS = [
    { id: "ta1", text: "5", type: "button" },
    { id: "ta2", text: "10", type: "button" },
    { id: "ta3", text: "15", type: "button" },
    { id: "ta4", text: "25", type: "button" },
    { id: "ta5", text: "50", type: "button" },
    { id: "ta6", text: "Custom", type: "input" },
  ];
  return (
    <div>
      <p>Select Tip %</p>
      <div className={classes.TipContainer}>
        {TIP_AMOUNTS.map((Tip) => {
          if (Tip.type === "button") {
            return (
              <Button
                key={Tip.id}
                text={`${Tip.text}%`}
                clicked={() => props.change(+Tip.text)}
              />
            );
          }
          return (
            <Input
              key={Tip.id}
              type="number"
              name={Tip.text}
              placeholder={Tip.text}
              inputOnly
              change={props.change}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TipAmounts;
