export default function BlankPage() {
  return (
    <div className="full_container">
      <div className="inner_container">
        <nav id="sidebar">
          <div className="sidebar_blog_1">
            <div className="sidebar-header">
              <div className="logo_section">
                <a href="index.html">
                  <img
                    className="logo_icon img-responsive"
                    src="images/logo/logo_icon.png"
                    alt="#"
                  />
                </a>
              </div>
            </div>
            <div className="sidebar_user_info">
              <div className="icon_setting"></div>
              <div className="user_profle_side">
                <div className="user_img">
                  <img
                    className="img-responsive"
                    src="images/layout_img/user_img.jpg"
                    alt="#"
                  />
                </div>
                <div className="user_info">
                  <h6>John David</h6>
                  <p>
                    <span className="online_animation"></span> Online
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar_blog_2">
            <h4>General</h4>
            <ul className="list-unstyled components">
              <li className="active">
                <a
                  href="#dashboard"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-dashboard yellow_color"></i>{" "}
                  <span>Dashboard</span>
                </a>
                <ul className="collapse list-unstyled" id="dashboard">
                  <li>
                    <a href="dashboard.html">
                      {" "}
                      <span>Default Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard_2.html">
                      {" "}
                      <span>Dashboard style 2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="widgets.html">
                  <i className="fa fa-clock-o orange_color"></i>{" "}
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a
                  href="#element"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-diamond purple_color"></i>{" "}
                  <span>Elements</span>
                </a>
                <ul className="collapse list-unstyled" id="element">
                  <li>
                    <a href="general_elements.html">
                      {" "}
                      <span>General Elements</span>
                    </a>
                  </li>
                  <li>
                    <a href="media_gallery.html">
                      {" "}
                      <span>Media Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="icons.html">
                      {" "}
                      <span>Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="invoice.html">
                      {" "}
                      <span>Invoice</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="tables.html">
                  <i className="fa fa-table purple_color2"></i>{" "}
                  <span>Tables</span>
                </a>
              </li>
              <li>
                <a
                  href="#apps"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-object-group blue2_color"></i>{" "}
                  <span>Apps</span>
                </a>
                <ul className="collapse list-unstyled" id="apps">
                  <li>
                    <a href="email.html">
                      {" "}
                      <span>Email</span>
                    </a>
                  </li>
                  <li>
                    <a href="calendar.html">
                      {" "}
                      <span>Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a href="media_gallery.html">
                      {" "}
                      <span>Media Gallery</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="price.html">
                  <i className="fa fa-briefcase blue1_color"></i>{" "}
                  <span>Pricing Tables</span>
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <i className="fa fa-paper-plane red_color"></i>{" "}
                  <span>Contact</span>
                </a>
              </li>
              <li className="active">
                <a
                  href="#additional_page"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-clone yellow_color"></i>{" "}
                  <span>Additional Pages</span>
                </a>
                <ul className="collapse list-unstyled" id="additional_page">
                  <li>
                    <a href="profile.html">
                      {" "}
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="project.html">
                      {" "}
                      <span>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      {" "}
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="404_error.html">
                      {" "}
                      <span>404 Error</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="map.html">
                  <i className="fa fa-map purple_color2"></i> <span>Map</span>
                </a>
              </li>
              <li>
                <a href="charts.html">
                  <i className="fa fa-bar-chart-o green_color"></i>{" "}
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <i className="fa fa-cog yellow_color"></i>{" "}
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="content">
          <div className="topbar">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="full">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="sidebar_toggle"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <div className="logo_section">
                  <a href="index.html">
                    <img
                      className="img-responsive"
                      src="images/logo/logo.png"
                      alt="#"
                    />
                  </a>
                </div>
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
                            src="images/layout_img/user_img.jpg"
                            alt="#"
                          />
                          <span className="name_user">John David</span>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="profile.html">
                            My Profile
                          </a>
                          <a className="dropdown-item" href="settings.html">
                            Settings
                          </a>
                          <a className="dropdown-item" href="help.html">
                            Help
                          </a>
                          <a className="dropdown-item" href="#">
                            <span>Log Out</span>{" "}
                            <i className="fa fa-sign-out"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="midde_cont">
            <div className="container-fluid">
              <div className="row column_title">
                <div className="col-md-12">
                  <div className="page_title">
                    <h2>Profile</h2>
                  </div>
                </div>
              </div>

              <div className="row column1">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="white_shd full margin_bottom_30">
                    <div className="full graph_head">
                      <div className="heading1 margin_0">
                        <h2>User profile</h2>
                      </div>
                    </div>
                    <div className="full price_table padding_infor_info">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="full dis_flex center_text">
                            <div className="profile_img">
                              <img
                                width="180"
                                className="rounded-circle"
                                src="images/layout_img/user_img.jpg"
                                alt="#"
                              />
                            </div>
                            <div className="profile_contant">
                              <div className="contact_inner">
                                <h3>John Smith</h3>
                                <p>
                                  <strong>About: </strong>Frontend Developer
                                </p>
                                <ul className="list-unstyled">
                                  <li>
                                    <i className="fa fa-envelope-o"></i> :
                                    test@gmail.com
                                  </li>
                                  <li>
                                    <i className="fa fa-phone"></i> : 987 654
                                    3210
                                  </li>
                                </ul>
                              </div>
                              <div className="user_progress_bar">
                                <div className="progress_bar">
                                  <span
                                    className="skill"
                                    style={{ width: "85%" }}
                                  >
                                    Web Applications{" "}
                                    <span className="info_valume">85%</span>
                                  </span>
                                  <div className="progress skill-bar ">
                                    <div
                                      className="progress-bar progress-bar-animated progress-bar-striped"
                                      role="progressbar"
                                      aria-valuenow="85"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: "85% " }}
                                    ></div>
                                  </div>
                                  <span
                                    className="skill"
                                    style={{ width: "78%" }}
                                  >
                                    Website Design{" "}
                                    <span className="info_valume">78%</span>
                                  </span>
                                  <div className="progress skill-bar">
                                    <div
                                      className="progress-bar progress-bar-animated progress-bar-striped"
                                      role="progressbar"
                                      aria-valuenow="78"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: "78%" }}
                                    ></div>
                                  </div>
                                  <span className="skill" style={{ width:"47%" }}>
                                    Automation & Testing{" "}
                                    <span className="info_valume">47%</span>
                                  </span>
                                  <div className="progress skill-bar">
                                    <div
                                      className="progress-bar progress-bar-animated progress-bar-striped"
                                      role="progressbar"
                                      aria-valuenow="54"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: "54%" }}
                                    ></div>
                                  </div>
                                  <span className="skill" style={{ width:"65%" }}>
                                    UI / UX{" "}
                                    <span className="info_valume">65%</span>
                                  </span>
                                  <div className="progress skill-bar">
                                    <div
                                      className="progress-bar progress-bar-animated progress-bar-striped"
                                      role="progressbar"
                                      aria-valuenow="65"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{ width: "65%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="full inner_elements margin_top_30">
                            <div className="tab_style2">
                              <div className="tabbar">
                                <nav>
                                  <div
                                    className="nav nav-tabs"
                                    id="nav-tab"
                                    role="tablist"
                                  >
                                    <a
                                      className="nav-item nav-link active"
                                      id="nav-home-tab"
                                      data-toggle="tab"
                                      href="#recent_activity"
                                      role="tab"
                                      aria-selected="true"
                                    >
                                      Recent Activity
                                    </a>
                                    <a
                                      className="nav-item nav-link"
                                      id="nav-profile-tab"
                                      data-toggle="tab"
                                      href="#project_worked"
                                      role="tab"
                                      aria-selected="false"
                                    >
                                      Projects Worked on
                                    </a>
                                    <a
                                      className="nav-item nav-link"
                                      id="nav-contact-tab"
                                      data-toggle="tab"
                                      href="#profile_section"
                                      role="tab"
                                      aria-selected="false"
                                    >
                                      Profile
                                    </a>
                                  </div>
                                </nav>
                                <div
                                  className="tab-content"
                                  id="nav-tabContent"
                                >
                                  <div
                                    className="tab-pane fade show active"
                                    id="recent_activity"
                                    role="tabpanel"
                                    aria-labelledby="nav-home-tab"
                                  >
                                    <div className="msg_list_main">
                                      <ul className="msg_list">
                                        <li>
                                          <span>
                                            <img
                                              src="images/layout_img/msg2.png"
                                              className="img-responsive"
                                              alt="#"
                                            />
                                          </span>
                                          <span>
                                            <span className="name_user">
                                              Taison Jack
                                            </span>
                                            <span className="msg_user">
                                              Sed ut perspiciatis unde omnis.
                                            </span>
                                            <span className="time_ago">
                                              12 min ago
                                            </span>
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <img
                                              src="images/layout_img/msg3.png"
                                              className="img-responsive"
                                              alt="#"
                                            />
                                          </span>
                                          <span>
                                            <span className="name_user">
                                              Mike John
                                            </span>
                                            <span className="msg_user">
                                              On the other hand, we denounce.
                                            </span>
                                            <span className="time_ago">
                                              12 min ago
                                            </span>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="project_worked"
                                    role="tabpanel"
                                    aria-labelledby="nav-profile-tab"
                                  >
                                    <p>
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem accusantium
                                      doloremque laudantium, totam rem aperiam,
                                      eaque ipsa quae ab illo inventore
                                      veritatis et quasi architecto beatae vitae
                                      dicta sunt explicabo. Nemo enim ipsam
                                      voluptatem quia voluptas sit aspernatur
                                      aut odit aut fugit, sed quia consequuntur
                                      magni dolores eos qui ratione voluptatem
                                      sequi nesciunt.
                                    </p>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="profile_section"
                                    role="tabpanel"
                                    aria-labelledby="nav-contact-tab"
                                  >
                                    <p>
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem accusantium
                                      doloremque laudantium, totam rem aperiam,
                                      eaque ipsa quae ab illo inventore
                                      veritatis et quasi architecto beatae vitae
                                      dicta sunt explicabo. Nemo enim ipsam
                                      voluptatem quia voluptas sit aspernatur
                                      aut odit aut fugit, sed quia consequuntur
                                      magni dolores eos qui ratione voluptatem
                                      sequi nesciunt.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="footer">
                    <p>
                      Copyright © 2018 Designed by html.design. All rights
                      reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
