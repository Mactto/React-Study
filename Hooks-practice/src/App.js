import React, { useState } from "react";
import "./styles.css";

const useInput = (i, validator) => {
  const [value, setValue] = useState(i);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
  };
  let willUpdate = true;
  console.log(validator.value);
  if (typeof validator === "Function") {
    willUpdate = validator(value);
  }
  if (willUpdate) {
    return { value, onChange };
  }
};

export default function App() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}