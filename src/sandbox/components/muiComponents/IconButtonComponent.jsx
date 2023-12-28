import { Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const IconButtonComponent = () => {
  return (
    <Fragment>
      <IconButton color="error">
        <CatchingPokemonIcon />
      </IconButton>
    </Fragment>
  );
};
export default IconButtonComponent;
