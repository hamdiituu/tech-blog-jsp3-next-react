import {
  Copyright,
  PageTitle,
  Sidebar,
  Topbar,
} from "../components/Template/partials";

export default function BlankPage() {
  return (
    <div className="full_container">
      <div className="inner_container">
        <Sidebar />

        <div id="content">
          <Topbar />
          <div className="midde_cont">
            <div className="container-fluid">
              <PageTitle title="Blank" />

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
