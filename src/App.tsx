import React, { FC, useEffect, useState } from "react";
import "./App.css";
const nubmers: Array<string> = [
  "/",
  "0",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "+",
  ".",
];
const sign: Array<string> = ["+", "-", "*", "/", "."];
const signMinus: Array<string> = ["+", "*", "/"];
const App: FC = () => {
  const [input, setInput] = useState<string>("");
  useEffect(() => {
    if (input.length === 1 && input.slice(0, 1) === ".") {
      setInput(`0${input}`);
    }
  }, [input]);
  const handleDelete = () => {
    setInput("");
  };
  const DeleteOne = () => {
    setInput(input.slice(0, input.length - 1));
  };
  const handleClick = (value: string) => {
    if (
      (signMinus.includes(value) && input.length === 0) ||
      (signMinus.includes(value) && input.length === 1)
    ) {
      if (input.slice(0) === ".") {
        alert("f");
        return setInput(`0${input}`);
      } else {
        return setInput(input);
      }
    }
    if (sign.includes(value) && sign.includes(input.slice(-1))) {
      return setInput(input.slice(0, input.length - 1) + value);
    }
    if (input.length === 0 && value.includes(".")) {
      return setInput(`0${value}`);
    } else {
      setInput(input + value);
    }
  };
  const handleEqual = () => {
    if (sign.includes(input.slice(-1))) {
      setInput(eval(input.slice(0, -1)).toString());
    } else {
      setInput(eval(input).toString());
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator-display">
          <div className="display-value">{input || "0"}</div>
        </div>
        <div className="calculator-keypad">
          <button onClick={handleDelete} className="btn clear">
            AC
          </button>
          <button onClick={DeleteOne} className="btn">
            C
          </button>
          {nubmers.map((i) => {
            return (
              <button key={i} onClick={() => handleClick(i)} className="btn">
                {i}
              </button>
            );
          })}
          <button onClick={handleEqual} className="btn equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
