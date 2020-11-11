import React, { useState, useEffect, useRef } from "react";

const useFullScreen = () => {
  const element = useRef();
  const makeFull = () => {
    element.current.requestFullscreen();
  };
  const makeSmall = () => {
    document.exitFullscreen();
  }

  return {element, makeFull, makeSmall}
}

const App = () => {
  const {element, makeFull, makeSmall} = useFullScreen();
  return (
    <div className="App" style = {{height: "1000vh"}}>
      <div ref={element}>
        <image src="C:\Users\mactt\OneDrive\바탕 화면\아이템\MimeMan.jpg"/>
      </div>
      <button onClick={makeFull}>make full</button>
      <button onClick={makeSmall}>make small</button>
    </div>
  );
};

export default App;