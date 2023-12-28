import Typography from "@mui/material/Typography";
import { useEffect } from "react";
const ComponentToKillComponent = () => {
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      console.log("here");
    }, 1000);
    return () => {
      //this function will be executed when this component will be killed
      console.log("component rip");
      clearInterval(intervalId);
    };
  }, []);
  return <Typography variant="h3">Component</Typography>;
};

export default ComponentToKillComponent;
