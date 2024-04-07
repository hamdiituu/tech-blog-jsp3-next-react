import { Copyright, Sidebar, Topbar } from "./partials";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div className="full_container">
      <div className="inner_container">
        <Sidebar />

        <div id="content">
          <Topbar />
          <div className="midde_cont">
            <div className="container-fluid">
              <Outlet />
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
