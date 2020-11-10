import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return {ref: element, style: {opacity:0}};
}

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}> hello </h1>
      <p {...fadeInP}>lalalalala</p>
    </div>
  );
};

export default App;