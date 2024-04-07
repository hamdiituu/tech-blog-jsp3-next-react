import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar_blog_1">
        <div className="sidebar-header">
          <div className="logo_section">
            <Link to={"/"}>
              <img
                className="logo_icon img-responsive"
                src="/images/favicon.ico"
                alt="#"
              />
            </Link>
          </div>
        </div>
        <div className="sidebar_user_info">
          <div className="icon_setting"></div>
          <div className="user_profle_side">
            <div className="user_img">
              <img
                className="img-responsive"
                src="/images/favicon.ico"
                alt="#"
              />
            </div>
            <div className="user_info">
              <h6>User Name</h6>
              <p>
                <span className="online_animation"></span> Aktif
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_blog_2">
        <h4>Genel</h4>
        <ul className="list-unstyled components">
          <li className="active">
            <Link to={"/"} data-toggle="collapse" aria-expanded="false">
              <i className="fa fa-dashboard yellow_color"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/contact-forms"}>
              <i className="fa fa-paper-plane red_color"></i>{" "}
              <span>İletişim Formları</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
