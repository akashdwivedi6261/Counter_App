import React from "react";
import styles from "./Counter.module.css";
import Double from "./Double";
export default function Counter({ state, setState }) {
  const Increment = (val) => {
    setState(state + val);
  };
  const Decrement = (val) => {
    setState(state + val);
  };
  return (
    <>
      <div className={styles.main}>
        <h1>Counter App</h1>
        <h2>{state}</h2>
        <button onClick={() => Increment(+1)}>Increment</button>
        <button onClick={() => Decrement(-1)}>Decrement</button>
        <Double state={state} setState={setState} />
      </div>
    </>
  );
}
