// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

// Common components
import Sidenav from "./components/common/sidemenu/sideMenu";
import Header from "./components/common/Header/header";
import RightSideMenu from "./components/common/rightSideMenu/RightSideMenu";
import { Suspense } from "react";
import Loader from "./components/common/loader/loader";
import Login from "./pages/login/login";
import TrmericCard from "./components/common/Card/TrmericCard";
import ViewDetails from "./pages/viewDetails/ViewDetails";
import Layout from "./components/common/layout/Layout";
import DesignSystem from "./components/common/designSystem/DesignSystem";
function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
      <Routes>
           <Route path="/login" element={<Login />} />
            <Route path="/viewdetails" element={<ViewDetails />} />
            <Route path="/" element={<Layout />} />
            <Route path="/design" element={<DesignSystem />} />

          </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
