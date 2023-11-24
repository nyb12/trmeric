import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidenav from "./components/common/sidemenu/sideMenu";
import Header from "./components/common/Header/header";
function App() {
  return (
    <>
      <Header />
      <Sidenav />
    </>
  );
}

export default App;
