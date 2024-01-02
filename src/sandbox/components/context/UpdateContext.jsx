import { useContext, useEffect } from "react";
import useCounterContext, {
  CounterSettingContext,
} from "../../../store/counterContext";

const UpdateContext = () => {
  let { setCounter } = useContext(CounterSettingContext); //gain access to counter context

  const handleBtnClick = () => {
    setCounter((cCount) => cCount + 1);
  };
  return (
    <div>
      <h3>UpdateContext</h3>
      <button onClick={handleBtnClick}>Increment</button>
    </div>
  );
};

export default UpdateContext;
