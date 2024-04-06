import Copyright from "../../components/Copyright";
import PageTitle from "../../components/PageTitle";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

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
