import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import ROUTES from "../../routes/ROUTES";

const CardsExamplePage = () => {
  return (
    <Stack>
      <Link to={`${ROUTES.EDITCARD}/assdf1`}>card1</Link>
      <Link to="/edit/assdf2">card2</Link>
      <Link to="/edit/assdf3">card3</Link>
      <Link to="/edit/assdf4">card4</Link>
    </Stack>
  );
};

export default CardsExamplePage;
