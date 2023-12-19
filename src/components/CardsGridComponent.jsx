import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import car1 from "../assets/imgs/car 1.jpg";
import car2 from "../assets/imgs/car 2.jpg";
import car3 from "../assets/imgs/car 3.jpg";
import car4 from "../assets/imgs/car 4.jpg";
import car5 from "../assets/imgs/car 5.png";
const CardsGridComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent
          title="title1"
          subtitle="subtitle1"
          body="body1"
          img={car1}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent
          title="title2"
          subtitle="subtitle2"
          body="body2"
          img={car2}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent
          title="title3"
          subtitle="subtitle3"
          body="body3"
          img={car3}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent
          title="title4"
          subtitle="subtitle4"
          body="body4"
          img={car4}
        />
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <CardComponent
          title="title5"
          subtitle="subtitle5"
          body="body5"
          img={car5}
        />
      </Grid>
    </Grid>
  );
};

export default CardsGridComponent;
