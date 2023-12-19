import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
const CardsGridComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent />
      </Grid>
    </Grid>
  );
};

export default CardsGridComponent;
