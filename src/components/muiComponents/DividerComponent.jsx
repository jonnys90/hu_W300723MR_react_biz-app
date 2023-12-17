import { Box, Divider, Chip, Typography } from "@mui/material";

const DividerComponent = () => {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.";
  return (
    <Box>
      {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content}
      <Divider></Divider>
      <Box display="flex">
        <Typography sx={{ p: 2 }} component="span">
          {content}
        </Typography>
        <Divider orientation="vertical" flexItem>
          Vertical
        </Divider>
        <Typography sx={{ p: 2 }} component="span">
          {content}
        </Typography>
      </Box>
    </Box>
  );
};
export default DividerComponent;
