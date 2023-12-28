import { Fragment } from "react";
import TextField from "@mui/material/TextField";

const TextFieldComponent = () => {
  return (
    <Fragment>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Fragment>
  );
};
export default TextFieldComponent;
