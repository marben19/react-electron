import Sidebar from "./components/Sidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="main-content flex-grow-1">
        {/* DashboardNavbar positioned at top of content */}
        

        {/* Page content */}
        <main className="content pt-2">
          <DashboardNavbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
