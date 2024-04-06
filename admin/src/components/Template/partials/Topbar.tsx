export default function Topbar() {
  return (
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="full">
          <button type="button" id="sidebarCollapse" className="sidebar_toggle">
            <i className="fa fa-bars"></i>
          </button>
          {/* <div className="logo_section">
            <a href="index.html">
              <img
                className="img-responsive"
                src="images/logo/logo.png"
                alt="#"
              />
            </a>
          </div> */}
          <div className="right_topbar">
            <div className="icon_info">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-bell-o"></i>
                    <span className="badge">2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-question-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o"></i>
                    <span className="badge">3</span>
                  </a>
                </li>
              </ul>
              <ul className="user_profile_dd">
                <li>
                  <a className="dropdown-toggle" data-toggle="dropdown">
                    <img
                      className="img-responsive rounded-circle"
                      src="images/favicon.ico"
                      alt="#"
                    />
                    <span className="name_user">User Name</span>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="profile.html">
                      Hesabım
                    </a>
                    <a className="dropdown-item" href="settings.html">
                      Ayarlar
                    </a>
                    <a className="dropdown-item" href="help.html">
                      Yardım
                    </a>
                    <a className="dropdown-item" href="#">
                      <span>Çıkış yap</span> <i className="fa fa-sign-out"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
