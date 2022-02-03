import "./styles.css";
import React from "react";
import Counter from "./Components/Counter";
export default function App() {
  const [state, setState] = React.useState(0);
  return (
    <div className="App">
      <Counter state={state} setState={setState} />
    </div>
  );
}
