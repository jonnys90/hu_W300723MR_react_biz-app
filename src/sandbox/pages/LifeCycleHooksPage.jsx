import { Fragment, useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import ComponentToKillComponent from "../components/ComponentToKillComponent";

const LifeCycleHooksPage = () => {
  const [count, setCount] = useState(() => {
    console.log("initial state");
    return 0;
  });
  const [show, setShow] = useState(true);
  // !do not add async in the callback function
  useEffect(() => {
    /* will work every time state update */
    console.log("useEffect");
  });
  useEffect(() => {
    /* will work only one time and after the component ready */
    console.log("useEffect with []");
  }, []);
  useEffect(() => {
    console.log("count from useEffect 3", count);
  }, [count]);
  const handleBtnClick = () => {
    setCount((currentCount) => currentCount + 1);
    console.log("count from handleBtnClick", count);
  };
  const handleToggleBtnClick = () => {
    setShow(!show);
  };
  console.log("from logic");
  return (
    <Fragment>
      {console.log("from html")}
      <Button variant="contained" onClick={handleBtnClick}>
        +2
      </Button>
      <Typography>LifeCycleHooksPage, count: {count}</Typography>
      <Button variant="contained" onClick={handleToggleBtnClick}>
        toggle
      </Button>
      {show && <ComponentToKillComponent />}
    </Fragment>
  );
};

export default LifeCycleHooksPage;
