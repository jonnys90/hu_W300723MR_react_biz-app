import { useContext, useEffect } from "react";
import { CounterSettingContext } from "../../../store/counterContext";

const DisplayContext = () => {
  let { counter } = useContext(CounterSettingContext); //gain access to counter context

  useEffect(() => {
    console.log(counter);
  }, [counter]); //when changing state value, the useEffect will update the counter value in the counter context)
  return (
    <div>
      <h3>Display component</h3>
      <h4>{counter}</h4>
    </div>
  );
};
export default DisplayContext;
