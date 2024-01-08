import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Common components
import { Suspense, useEffect } from 'react';
import DesignSystem from './components/common/designSystem/DesignSystem';
import Loader from './components/common/loader/loader';
import HomeDashboard from './pages/dashboard/homeDashboard/homeDashboard';
import Login from './pages/login/login';
import ViewDetails from './pages/viewDetails/ViewDetails';
import Tutorial from './pages/dashboard/onBoardingTutorial/Tutorial';
import './fonts/fonts.css';
import DashLayout from './pages/dashboard/Layout/DashLayout';
import PrivateRoutes from './components/common/ProtectedRoutes/PrivateRoutes';
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-46H3DEL1ZB');
};
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.send(window.location.pathname);
  console.log('From Google', JSON.stringify(window.location.pathname));
};

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  ReactGA.event(window.location.pathname);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route
              path='/viewdetails'
              element={<PrivateRoutes Component={ViewDetails} />}
            />
            <Route
              path='/homepage'
              element={<PrivateRoutes Component={HomeDashboard} />}
            />
            <Route path='/tutorial' element={<Tutorial />} />
            <Route path='/dashLayout' element={<DashLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
