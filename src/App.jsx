import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Common components
import { Suspense } from 'react';
import DesignSystem from './components/common/designSystem/DesignSystem';
import Loader from './components/common/loader/loader';
import HomeDashboard from './pages/dashboard/homeDashboard/homeDashboard';
import Login from './pages/login/login';
import ViewDetails from './pages/viewDetails/ViewDetails';
import Tutorial from './pages/dashboard/onBoardingTutorial/Tutorial';
import './fonts/fonts.css';
import DashLayout from './pages/dashboard/Layout/DashLayout';
import HomeDashBoard from './pages/dashboard/homeDashboard/homeDashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/viewdetails' element={<ViewDetails />} />
            <Route path='/' element={<HomeDashBoard />} />
            <Route path='/homepage' element={<HomeDashboard />} />
            <Route path='/design' element={<DesignSystem />} />
            <Route path='/tutorial' element={<Tutorial />} />
            <Route path='/dashLayout' element={<DashLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
