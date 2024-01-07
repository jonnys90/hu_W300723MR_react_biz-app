import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

let initialDataFromServer = [
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

//https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards
const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        console.log(data);
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);
  if (!dataFromServer || !dataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }
  const handleDeleteCard = (id) => {
    console.log("father: card to delete", id);
    setDataFromServer((currentDataFromServer) =>
      currentDataFromServer.filter((card) => card._id !== id)
    );
    console.log({ dataFromServer });
  };

  const handleEditCard = (id) => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {dataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            cardNumber={item.bizNumber}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
