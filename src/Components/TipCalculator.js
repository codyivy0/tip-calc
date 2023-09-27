import SelectPercent from "./SelectPercentage";
import Output from "./Output";
import BillInput from "./BillInput";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentA, setPercentA] = useState(0);
  const [percentB, setPercentB] = useState(0);

  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercent percent={percentA} setPercent={setPercentA}>
        {" "}
        How much did you enjoy your service?
      </SelectPercent>
      <SelectPercent percent={percentB} setPercent={setPercentB}>
        {" "}
        How much did your friend enjoy thier service?
      </SelectPercent>
      <Output bill={bill} percentA={percentA} percentB={percentB} />
    </>
  );
}
