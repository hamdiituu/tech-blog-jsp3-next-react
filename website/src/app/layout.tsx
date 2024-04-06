import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import ScrollToTop from "@/component/ScrollToTop";

export const metadata = {
  title: "Techblog 🤩",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
          rel="stylesheet"
        />

        <link href="/css/bootstrap.css" rel="stylesheet" />

        <link href="/css/font-awesome.min.css" rel="stylesheet" />

        <link href="/style.css" rel="stylesheet" />

        <link href="/css/responsive.css" rel="stylesheet" />

        <link href="/css/colors.css" rel="stylesheet" />

        <link href="/css/version/tech.css" rel="stylesheet" />
      </head>
      <body>
        <div id="wrapper">
          <Navbar />
          <div className="page-wrapper">{children}</div>

          {/* <section className="section wb">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-wrapper">{children}</div>
                </div>
              </div>
            </div>
          </section> */}

          <Footer />

          <ScrollToTop />
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/tether.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/custom.js"></script>
      </body>
    </html>
  );
}