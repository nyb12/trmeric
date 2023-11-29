// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "../../../../src/App.css";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

// Common components
import Sidenav from "../sidemenu/sideMenu";
import Header from "../Header/header";
import RightSideMenu from "../rightSideMenu/RightSideMenu";
// import { Suspense } from "react";
// import Loader from "./components/common/loader/loader";
// import Login from "./pages/login/login";
// import TrmericCard from "./components/common/Card/TrmericCard";
// import ViewDetails from "./pages/viewDetails/ViewDetails";
function Layout() {
  return (
    <>
      <Header />
          <div className="page-container">
            <Sidenav />
            <RightSideMenu />   
        </div>
    </>
  );
}

export default Layout;
