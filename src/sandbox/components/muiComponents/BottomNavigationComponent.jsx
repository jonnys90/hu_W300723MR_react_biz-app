import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DiamondIcon from "@mui/icons-material/Diamond";
const BottomNavigationComponent = () => {
  return (
    <Paper elevation={4} sx={{ position: "sticky", mt: 2 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Icebook" icon={<AcUnitIcon />} />
        <BottomNavigationAction label="Cofegram" icon={<CoffeeIcon />} />
        <BottomNavigationAction label="D" icon={<DiamondIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationComponent;
