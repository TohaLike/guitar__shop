import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabBar() {
  const pages = ["HOME", "ABOUT US", "SHOP", "AMPLIFIERS"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-end",
        bgcolor: "#e0e0e0",
        position: "fixed",
        left: 0,
        bottom: 0,
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
        <Tab label="HOME" />
        <Tab label="ABOUT US" />
        <Tab label="SHOP" />
        <Tab label="AMPLIFIERS" />
      </Tabs>
    </Box>
  );
}