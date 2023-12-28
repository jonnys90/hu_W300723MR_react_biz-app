import { Stack, Typography, Divider } from "@mui/material";
import CardComponent from "../CardComponent";

const StackComponent = () => {
  return (
    <Stack
      m={2}
      spacing={2}
      direction="row"
      divider={<Divider flexItem orientation="vertical" />}
    >
      <Typography>text1</Typography>
      <Typography>text2</Typography>
      <Typography>text3</Typography>
      <Typography>text4</Typography>
    </Stack>
  );
};

export default StackComponent;
