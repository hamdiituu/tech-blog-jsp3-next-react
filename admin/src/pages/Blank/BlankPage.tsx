import Copyright from "../../components/Template/partials/Copyright";
import PageTitle from "../../components/Template/partials/PageTitle";
import Sidebar from "../../components/Template/partials/Sidebar";
import Topbar from "../../components/Template/partials/Topbar";

export default function BlankPage() {
  return (
    <div className="full_container">
      <div className="inner_container">
        <Sidebar />

        <div id="content">
          <Topbar />
          <div className="midde_cont">
            <div className="container-fluid">
              <PageTitle title="Blank"/>

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
