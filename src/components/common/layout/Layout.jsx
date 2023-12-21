import '../../../../src/App.css';

// Common components
import Sidenav from '../sidemenu/sideMenu';
import Header from '../Header/header';
import RightSideMenu from '../rightSideMenu/RightSideMenu';
import { Box } from '@mui/material';
import SubHeader from '../subHeader/subHearder';
import ViewDetails from '../../../pages/viewDetails/ViewDetails';
import ResponsiveDrawer from '../../../pages/dashboard/Layout/DashLayout';
import TrmericCard from '../Card/TrmericCard';

function Layout({ children }) {
  return (
    <>
      <ResponsiveDrawer>
        <TrmericCard />
      </ResponsiveDrawer>
      {/* <Header />
      <Box>
        <SubHeader />
      </Box>
      <div className='page-container'>
        <Sidenav>{children}</Sidenav>
        <RightSideMenu />
      </div> */}
    </>
  );
}

export default Layout;
