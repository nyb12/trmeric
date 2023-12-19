import '../../../../src/App.css';

// Common components
import Sidenav from '../sidemenu/sideMenu';
import Header from '../Header/header';
import RightSideMenu from '../rightSideMenu/RightSideMenu';
import { Box } from '@mui/material';
import SubHeader from '../subHeader/subHearder';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Box>
        <SubHeader />
      </Box>
      <div className='page-container'>
        <Sidenav>{children}</Sidenav>
        <RightSideMenu />
      </div>
    </>
  );
}

export default Layout;
