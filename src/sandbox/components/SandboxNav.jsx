import { Paper, Stack, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SandboxNav = () => {
  return (
    <Paper>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="/sandbox/first-component">
          <Typography variant="span">First component</Typography>
        </Link>
        <Link to="/sandbox/fc">
          <Typography variant="span">Father component</Typography>
        </Link>
        <Link to="/sandbox/lch">
          <Typography variant="span">Life Cycle Hooks component</Typography>
        </Link>
      </Stack>
    </Paper>
  );
};

export default SandboxNav;
