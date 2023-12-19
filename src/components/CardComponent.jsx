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
/**
 * title -> title
 * subtitle -> subheader
 */
const CardComponent = ({ title, subtitle, img, body }) => {
  // let { title, subtitle, img, body } = props;
  // console.log(props);
  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="american massle car"
          height={200}
        />
        <CardHeader title={title} subheader={subtitle}></CardHeader>
        <Divider></Divider>
        <CardContent>
          <Typography>{body}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
