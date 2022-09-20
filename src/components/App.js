import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [data, setData] = useState("");
  const showData = () => {
    setData(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      <button
        id="click "
        onClick={() => {
          showData();
        }}
      >
        Click
      </button>
      <p id="para">{data}</p>
    </div>
  );
}

export default App;
