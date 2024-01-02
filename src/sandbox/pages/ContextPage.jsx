import { Grid } from "@mui/material";
import UpdateContext from "../components/context/UpdateContext";
import DisplayContext from "../components/context/DisplayContext";

const ContextPage = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <UpdateContext />
      </Grid>
      <Grid item xs={6}>
        <DisplayContext />
      </Grid>
    </Grid>
  );
};

export default ContextPage;
