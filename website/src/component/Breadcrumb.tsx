export default function Breadcrumb() {
  return (
    <div className="page-title lb single-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h2>
              <i className="fa fa-envelope-open-o bg-orange"></i> Contact us{" "}
              <small className="hidden-xs-down hidden-sm-down">
                Nulla felis eros, varius sit amet volutpat non.{" "}
              </small>
            </h2>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
