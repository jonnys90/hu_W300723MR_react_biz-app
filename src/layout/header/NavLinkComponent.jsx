import { Typography } from "@mui/material";

const NavLinkComponent = ({ to, children }) => {
  const isActive = false;
  return (
    <Typography
      color={isActive ? "text.headerActive" : "text.headerColor"}
      sx={{ p: 2 }}
      variant="h6"
    >
      {children}
    </Typography>
  );
};
{
  /* <Link to={to}>
      <Typography color="text.primary" sx={{ p: 2 }}>
        {children}
      </Typography>
    </Link> */
}
export default NavLinkComponent;
