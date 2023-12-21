import { Fragment } from "react";
import AboutUsPage from "../pages/AboutUsPage";
import FooterComponent from "./footer/FooterComponent";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";

const LayoutComponent = () => {
  return (
    <Fragment>
      <HeaderComponent />
      <MainComponent>
        <AboutUsPage />
      </MainComponent>
      <FooterComponent />
    </Fragment>
  );
};
export default LayoutComponent;
