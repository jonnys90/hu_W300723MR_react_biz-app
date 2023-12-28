import { Fragment } from "react";
import { Typography, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import SandboxNav from "../components/SandboxNav";

const SandboxPage = () => {
  return (
    <Fragment>
      <SandboxNav />
      <Typography variant="h1">Welcome to sandbox</Typography>
      <Divider />
      <Outlet />
    </Fragment>
  );
};
export default SandboxPage;
