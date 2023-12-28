import { Fragment } from "react";

import styles from "./FirstComponent.module.css";
// import "./FirstComponent.css";

const FirstComponent = () => {
  /* logic section */
  console.log("is it working");
  let name = "john";
  return (
    <Fragment>
      <h1 style={{ color: "green", backgroundColor: "darkviolet" }}>Yey</h1>
      <h2 className={styles.h2}>the name is {name}</h2>
    </Fragment>
  );
};
export default FirstComponent;
/**
 * create new component
 * title
 * subtitle
 * p
 * create 3 css class to style the elements
 */
