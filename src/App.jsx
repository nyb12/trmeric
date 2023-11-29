import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common components
import Sidenav from "./components/common/sidemenu/sideMenu";
import Header from "./components/common/Header/header";
import RightSideMenu from "./components/common/rightSideMenu/RightSideMenu";
import { Suspense } from "react";
import Loader from "./components/common/loader/loader";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router> */}

        <Header />
      <div className="page-container">
        <Sidenav />
        <RightSideMenu />
 </div>
      </Suspense>
    </>
  );
}

export default App;
