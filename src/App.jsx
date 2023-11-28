
import "./App.css";
// Common components
import Sidenav from "./components/common/sidemenu/SideMenu";
import Header from "./components/common/Header/Header";
import RightSideMenu from "./components/common/rightSideMenu/RightSideMenu";

// Libraries
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a theme
const theme = createTheme();


function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <Header />
      <div className="page-container">
      <Sidenav />
      <RightSideMenu />
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
