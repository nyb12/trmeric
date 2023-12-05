import "../../../../src/App.css";

// Common components
import Sidenav from "../sidemenu/sideMenu";
import Header from "../Header/header";
import RightSideMenu from "../rightSideMenu/RightSideMenu";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="page-container">
        <Sidenav>{children}</Sidenav>
        <RightSideMenu />
      </div>
    </>
  );
}

export default Layout;
