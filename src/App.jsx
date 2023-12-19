// import Typography from "@mui/material/Typography";
// import "./App.css";
// import FirstComponent from "./components/FirstComponent";
// import ButtonComponent from "./components/muiComponents/ButtonComponent";
// import IconButtonComponent from "./components/muiComponents/IconButtonComponent";
// import TextFieldComponent from "./components/muiComponents/TextFieldComponent";
import CardComponent from "./components/CardComponent";
import DividerComponent from "./components/muiComponents/DividerComponent";
// import SxComponent from "./components/muiComponents/SxComponent";
// import TpoComponent from "./components/TpoComponent";
import { Container } from "@mui/material";
import StackComponent from "./components/muiComponents/StackComponent";
import CardsGridComponent from "./components/CardsGridComponent";
import BottomNavigationComponent from "./components/BottomNavigationComponent";

function App() {
  return (
    <Container sx={{ mt: 2 }}>
      {/* <TpoComponent /> */}
      {/* <SxComponent /> */}
      {/* <DividerComponent /> */}
      {/* <ButtonComponent /> */}
      {/* <IconButtonComponent /> */}
      {/* <TextFieldComponent /> */}
      {/* <CardComponent /> */}
      {/* <StackComponent /> */}
      <CardsGridComponent />
      <BottomNavigationComponent />
    </Container>
  );
}

export default App;
