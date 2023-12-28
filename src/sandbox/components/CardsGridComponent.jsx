import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "./CardComponent";
import car1 from "../assets/imgs/car 1.jpg";
import car2 from "../assets/imgs/car 2.jpg";
import car3 from "../assets/imgs/car 3.jpg";
import car4 from "../assets/imgs/car 4.jpg";
import car5 from "../assets/imgs/car 5.png";
const initialDataFromServer = [
  {
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: car1,
  },
  {
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: car2,
  },
  {
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: car3,
  },
  {
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: car4,
  },
  {
    title: "title5",
    subtitle: "subtitle5",
    body: "body5",
    img: car5,
  },
];

// const initialDataFromServer = [];

const CardsGridComponent = () => {
  if (!initialDataFromServer || !initialDataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }
  return (
    <Grid container spacing={2}>
      {initialDataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            phone="0500000000"
            address={{
              city: "South park",
              street: "Hogwards",
              houseNumber: 123,
              zipCode: 12345,
            }}
            cardNumber={12345}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsGridComponent;
