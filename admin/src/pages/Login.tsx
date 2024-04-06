export default function Login() {
  return (
    <div className="inner_page login">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login">
                <div className="center">
                  <h2 className="text-light">
                    <img src="/images/favicon.ico" alt="Logo" /> Techblog
                    Yönetim Paneli
                  </h2>
                </div>
              </div>
              <div className="login_form">
                <form>
                  <fieldset>
                    <div className="field">
                      <label className="label_field">E-posta adresi</label>
                      <input type="email" name="email" placeholder="ornek@eposta.com" />
                    </div>
                    <div className="field">
                      <label className="label_field">Şifre</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="*****"
                      />
                    </div>
                    <div className="field">
                      <label className="label_field hidden">hidden label</label>
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" />{" "}
                        Beni hatırla
                      </label>
                      <a className="forgot" href="">
                        Şifreni mi unuttun?
                      </a>
                    </div>
                    <div className="field margin_0">
                      <label className="label_field hidden">hidden label</label>
                      <button className="main_bt">Giriş yap</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
