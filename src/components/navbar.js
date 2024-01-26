import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        width: "50%",
      }}
    >
      <Link to="/">
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          HOME
        </Button>
      </Link>

      <Link to="/aboutUs">
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          ABOUT US
        </Button>
      </Link>
      <Link to="/shop">
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          SHOP
        </Button>
      </Link>
    </Box>
  );
}
