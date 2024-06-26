export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="widget">
              <div className="footer-text text-left">
                <a href="index.html">
                  <img
                    src="images/version/tech-footer-logo.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p>
                  Tech Blog bir teknoloji blogudur; pazarlama, haber ve gadget
                  makalelerini paylaşıyoruz.
                </p>
                <div className="social">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-original-title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-original-title="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-original-title="Instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-original-title="Google Plus"
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-original-title="Pinterest"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>

                <hr className="invis" />

                <div className="newsletter-widget text-left">
                  <form className="form-inline">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-posta adresinizi giriniz"
                    />
                    <button type="submit" className="btn btn-primary">
                      Beni Haberdar Et
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="widget">
              <h2 className="widget-title">Popüler Kategoriler</h2>
              <div className="link-widget">
                <ul>
                  <li>
                    <a href="#">
                      Marketing <span>(21)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      SEO Service <span>(15)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Digital Agency <span>(31)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Make Money <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Blogging <span>(66)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
            <div className="widget">
              <h2 className="widget-title">Copyrights</h2>
              <div className="link-widget">
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Write for us</a>
                  </li>
                  <li>
                    <a href="#">Trademark</a>
                  </li>
                  <li>
                    <a href="#">License & Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <br />
            <div className="copyright">@hamdiituu </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
