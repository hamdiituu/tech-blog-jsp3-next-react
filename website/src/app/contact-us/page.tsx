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
              <h4>Biz Kimiz</h4>
              <p>
                Teknolojiyi takip eden bir grup arkadaşız. Teknolojik aletleri
                ve inceliyoruz ve sizlere şeffaf bir şekilde size iletiyoruz.
              </p>

              <h4>Nasıl yardımcı oluyoruz?</h4>
              <p>
                Sizlerin geliştirdiği teknolojileri/aletleri inceleyerek
                kullanıcılarla buluşturuyoruz. Ürünlerini son kullanıcı
                açısından detaylı bir şekilde inceliyoruz.
              </p>

              <h4>Satış Öncesi Soru</h4>
              <p>
                Ürünlerinizi önceden kullanılarla buluşturarak tüm sorulara
                cevap arıyoruz ve sizlere ön satış imkanı sağlıyoruz.
              </p>
            </div>
            <div className="col-lg-7">
              <form className="form-wrapper">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adınız"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-posta adresi"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefon numarası"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Konu"
                />
                <textarea
                  className="form-control"
                  placeholder="Mesaj"
                ></textarea>
                <button type="submit" className="btn btn-primary">
                  Gönder <i className="fa fa-envelope-open-o"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
