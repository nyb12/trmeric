// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Common components
import { Suspense } from 'react';
import DesignSystem from './components/common/designSystem/DesignSystem';
import Layout from './components/common/layout/Layout';
import Loader from './components/common/loader/loader';
import HomeDashboard from './pages/dashboard/homeDashboard/homeDashboard';
import Login from './pages/login/login';
import ViewDetails from './pages/viewDetails/ViewDetails';
import './fonts/fonts.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/viewdetails' element={<ViewDetails />} />
            <Route path='/' element={<Layout />} />
            <Route path='/homepage' element={<HomeDashboard />} />
            <Route path='/design' element={<DesignSystem />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
