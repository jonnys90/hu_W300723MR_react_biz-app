import { Fragment } from "react";
import AboutUsPage from "../pages/AboutUsPage";
import FooterComponent from "./footer/FooterComponent";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
import CardsGridComponent from "../components/CardsGridComponent";

const LayoutComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <MainComponent>
        <CardsGridComponent />
      </MainComponent>
      <FooterComponent />
    </Fragment>
  );
};
export default LayoutComponent;
