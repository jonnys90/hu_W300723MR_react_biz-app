import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";

const initialDataFromServer = [
  {
    id: "sdlfkjgn0",
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: "/assets/imgs/car 1.jpg",
  },
  {
    id: "sdlfkjgn1",
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: "/assets/imgs/car 2.jpg",
  },
  {
    id: "sdlfkjgn2",
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: "/assets/imgs/car 3.jpg",
  },
  {
    id: "sdlfkjgn3",
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: "/assets/imgs/car 4.jpg",
  },
  {
    id: "sdlfkjgn4",
    title: "title5",
    subtitle: "subtitle5",
    body: "body5",
    img: "/assets/imgs/car 5.png",
  },
];

// const initialDataFromServer = [];

const handleDeleteCard = (id) => {
  console.log("father: card to delete", id);
};

const HomePage = () => {
  if (!initialDataFromServer || !initialDataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }
  return (
    <Grid container spacing={2}>
      {initialDataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            phone="0500000000"
            address={{
              city: "South park",
              street: "Hogwarts",
              houseNumber: 123,
              zipCode: 12345,
            }}
            cardNumber={12345}
            onDelete={handleDeleteCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
