import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        bgcolor: "#e0e0e0",
        position: "fixed",
        left: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Link to="/"><Tab label="HOME" LinkComponent=""/></Link>
          <Link to="/aboutUs"><Tab label="ABOUT US" /></Link>
          <Link to="/shop"><Tab label="SHOP" /></Link>
        </Tabs>
      </Box>
    </Box>
  );
}
