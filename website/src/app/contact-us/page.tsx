import Breadcrumb from "@/component/Breadcrumb";

export default function ContactUs() {
  return (
    <>
      <Breadcrumb
        title="İletişim"
        desription="Bizimle iletişime geçebilirsiniz"
        breadcrumbs={[
          { title: "Anasayfa", path: "/" },
          { title: "İletişim", path: "/contact-us", active: true },
        ]}
      />
      <div className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>Who we are</h4>
              <p>
                Tech Blog is a personal blog for handcrafted, cameramade
                photography content, fashion styles from independent creatives
                around the world.
              </p>

              <h4>How we help?</h4>
              <p>
                Etiam vulputate urna id libero auctor maximus. Nulla dignissim
                ligula diam, in sollicitudin ligula congue quis turpis dui urna
                nibhs.{" "}
              </p>

              <h4>Pre-Sale Question</h4>
              <p>
                Fusce dapibus nunc quis quam tempor vestibulum sit amet
                consequat enim. Pellentesque blandit hendrerit placerat.
                Integertis non.
              </p>
            </div>
            <div className="col-lg-7">
              <form className="form-wrapper">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
                <textarea
                  className="form-control"
                  placeholder="Your message"
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Send <i className="fa fa-envelope-open-o"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
