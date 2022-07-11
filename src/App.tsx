import React from "react";
import "./App.css";

import {Clock} from "./components/Clock";
import useClock from "./hooks/useClock";
import {Props} from "./components/Clock";

import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {

  const {hours, minutes, seconds} = useClock()

  return (
    <div className="App">
      {/* Clock */}
      {/* <Clock /> */}
      <Clock
       label="24 Hour Live Custom Component Clock" 
       hours= {hours} 
       minutes={minutes} 
       seconds={seconds} />

      {/* List 1  initialValues [1, 2, 3] */}
      {/* <List1 /> */}
      <List1 label="List1" initalValues={[1, 2, 3]} />

      {/* <List2  initialValues [4, 5] /> */}
      {/* <List2 /> */}

      <List2 label="List2" initalValues={[4, 5]} />

    </div>
  );
}

export default App;
