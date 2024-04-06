import { Copyright, Sidebar, Topbar } from "./partials";

export default function Template() {
  return (
    <div className="full_container">
      <div className="inner_container">
        <Sidebar />

        <div id="content">
          <Topbar />
          <div className="midde_cont">
            <div className="container-fluid">
              {/* 
                  Content
                */}
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
