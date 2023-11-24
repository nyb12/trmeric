import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="fixed" style={{ zIndex: 2222 }}>
      <Toolbar
        style={{
          background:
            "linear-gradient(101deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%)",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Trmeric
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
