import { Fragment } from "react";
import ChildComponent from "./ChildComponent";

const FatherComponent = () => {
  return (
    <Fragment>
      <ChildComponent content="text 1" />
      <ChildComponent content="kenny" />
    </Fragment>
  );
};

export default FatherComponent;
