import { useContext, useEffect } from "react";
import { CounterSettingContext } from "../../../store/counterContext";

const DisplayContext = () => {
  let { counter } = useContext(CounterSettingContext); //gain access to counter context
  /**
   * value = {
   *  counter,
   *  setCounter
   * }
   */
  return (
    <div>
      <h3>Display component</h3>
      <h4>{counter}</h4>
    </div>
  );
};
export default DisplayContext;
