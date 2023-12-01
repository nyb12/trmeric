import "../../../../src/App.css";

// Common components
import Sidenav from "../sidemenu/sideMenu";
import Header from "../Header/header";
import RightSideMenu from "../rightSideMenu/RightSideMenu";

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
