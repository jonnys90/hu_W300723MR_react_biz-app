import { Fragment, useCallback, useState, useMemo } from "react";
import ButtonComponent from "../components/ButtonComponent";
import TextField from "@mui/material/TextField";

const MemoPage = () => {
  const [txt, setTxt] = useState("");
  const [age, setAge] = useState(0);
  const handleTxtChange = (e) => {
    setTxt(e.target.value);
  };
  const handleBtnClick = useCallback(() => {
    console.log("you click on the btn");
    setAge((cage) => cage + 1);
  }, []);
  const slowFunc = useMemo(() => {
    for (let i = 0; i < 20000000; i++) {}
    return age;
  }, [age]);
  console.log(slowFunc);
  return (
    <Fragment>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={txt}
        onChange={handleTxtChange}
      />
      <ButtonComponent color="primary" onClick={handleBtnClick}>
        Click me
      </ButtonComponent>
    </Fragment>
  );
};

export default MemoPage;
