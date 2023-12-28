import Typography from "@mui/material/Typography";
import { Fragment } from "react";
const TpoComponent = () => {
  return (
    <Fragment>
      <Typography variant="h1" color="initial" align="center">
        title
      </Typography>
      <Typography variant="h2" color="initial">
        sub title
      </Typography>
      <Typography align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dicta,
        non exercitationem voluptates illo, porro eligendi officiis quidem omnis
        autem reiciendis.
        <Typography component="span" fontWeight={700} color="primary">
          Magni
        </Typography>{" "}
        aliquid repellat deserunt? Cupiditate doloribus repellat sit fugiat!
      </Typography>
      <Typography noWrap align="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dicta,
        non exercitationem voluptates illo, porro eligendi officiis quidem omnis
        autem reiciendis.
        <Typography component="span" fontWeight={700} color="primary">
          Magni
        </Typography>{" "}
        aliquid repellat deserunt? Cupiditate doloribus repellat sit fugiat!
      </Typography>
    </Fragment>
  );
};

export default TpoComponent;
/**
 * title - center, primary
 * subtitle - right, color
 * p - left, one world bolder(fontWeight 700)
 * p - noWrap, right
 */
