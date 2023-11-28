import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee', // Set your desired toolbar background color
    },
  },
  Paper: {
    body: {
      pad: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

export default function Header() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" style={{ zIndex: 2222 }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Trmeric
            </Typography>

            <IconButton size="large" edge="end" aria-label="search" color="inherit" sx={{ flexGrow: 1, justifyContent: 'flex-end' }} >
              <SearchIcon /> &nbsp;
              <Settings />
            </IconButton>
          </Toolbar>

          <Paper elevation={0} square sx={{ padding: 2, color: '#000', background: "#fff" }}>
            <Typography>
              Your Mission
            </Typography>
          </Paper>
        </AppBar>
      </ThemeProvider>

    </>

  );
}
