import Copyright from "./partials/Copyright";
import PageTitle from "./partials/PageTitle";
import Sidebar from "./partials/Sidebar";
import Topbar from "./partials/Topbar";

interface TemplateProps {
  pageTitle: string;
}

export default function Template(props: TemplateProps) {
  return (
    <div className="full_container">
      <div className="inner_container">
        <Sidebar />

        <div id="content">
          <Topbar />
          <div className="midde_cont">
            <div className="container-fluid">
              {props.pageTitle && <PageTitle title={props.pageTitle} />}

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
