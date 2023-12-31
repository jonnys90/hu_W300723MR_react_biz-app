import { memo } from "react";
import Button from "@mui/material/Button";

/**
 * callbackFunction starts with handle
 * onClick with Big C
 * when calling the function in the html part, dont add ()
 */

const ButtonComponent = ({ color, children, onClick }) => {
  console.log("Button rerender");
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

// export default ButtonComponent;
export default memo(ButtonComponent);
