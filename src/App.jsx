import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Common components
import Sidenav from "./components/common/sidemenu/sideMenu";
import Header from "./components/common/Header/header";
import RightSideMenu from "./components/common/rightSideMenu/RightSideMenu";

// Libraries
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a theme
const theme = createTheme();


function App() {
  return (
    <>
      <Header />
      <Sidenav />
      <ThemeProvider theme={theme}>
      <RightSideMenu />
      </ThemeProvider>
    </>
  );
}

export default App;
