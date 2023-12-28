import { Box, Button, Divider } from "@mui/material";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import BatteryCharging20Icon from "@mui/icons-material/BatteryCharging20";
const ButtonComponent = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", m: 1, p: 1, justifyContent: "space-evenly" }}>
        <Button>button1</Button>
        <Button variant="contained">button contained</Button>
        <Button variant="outlined">button outlined</Button>
        <Button variant="outlined" disabled>
          button outlined disabled
        </Button>
      </Box>
      <Divider>Colors</Divider>
      <Box sx={{ display: "flex", m: 1, p: 1, justifyContent: "space-evenly" }}>
        <Button variant="contained" color="primary">
          button primary
        </Button>
        <Button variant="contained" color="secondary">
          button secondary
        </Button>
      </Box>
      <Divider>Size</Divider>
      <Button variant="contained" color="primary" size="small">
        button small
      </Button>
      <Button variant="contained" color="primary" size="medium">
        button medium
      </Button>
      <Button variant="contained" color="primary" size="large">
        button large
      </Button>
      <Divider>Never do this</Divider>
      <Button
        variant="contained"
        size="large"
        sx={{ color: "cyan", backgroundColor: "black" }}
      >
        button large
      </Button>
      <Divider>Icons</Divider>
      <Button startIcon={<BatteryChargingFullIcon />} variant="outlined">
        Start lesson
      </Button>
      <Button endIcon={<BatteryCharging20Icon />} variant="outlined">
        End lesson lesson
      </Button>
    </Box>
  );
};
export default ButtonComponent;
/**
 * create large button with warning color, I like to see only the outline
 */
