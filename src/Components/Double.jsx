import React from "react";

export default function Double({ state, setState }) {
  return <button onClick={() => setState(state * 2)}>Double</button>;
}
