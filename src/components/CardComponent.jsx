import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
} from "@mui/material";
import car1 from "../assets/imgs/car 1.jpg";

const CardComponent = () => {
  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia component="img" image={car1} alt="american massle car" />
        <CardHeader title="title" subheader="sub title"></CardHeader>
        <Divider></Divider>
        <CardContent>
          <Typography>card body</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
