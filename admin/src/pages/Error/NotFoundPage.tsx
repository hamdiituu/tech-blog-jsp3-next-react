const NotFoundPage = () => {
  return (
    <div className="full_container">
      <div className="container">
        <div className="center verticle_center full_height">
          <div className="error_page">
            <div className="center">
              <div className="error_icon">
                <img
                  className="img-responsive"
                  src="/images/layout_img/error.png"
                  alt="#"
                />
              </div>
            </div>
            <br />
            <h3>Sayfa Bulunamadı!</h3>
            <p>
              Paneli kullanmaya devam etmek için aşağıdaki adımları takip
              ediniz.
            </p>
            <div className="center">
              <a className="main_bt" href="/">
                Panele Dön
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
