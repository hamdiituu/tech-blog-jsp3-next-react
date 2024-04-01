interface BreadcrumbItem {
  title: string;
  path?: string;
  active?: boolean;
}

interface Props {
  title: string;
  desription?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function Breadcrumb(props: Props) {
  return (
    <div className="page-title lb single-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h2>
              <i className="fa fa-envelope-open-o bg-orange"></i> {props.title}
              <small className="hidden-xs-down hidden-sm-down">
                {props.desription}
              </small>
            </h2>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
            <ol className="breadcrumb">
              {props.breadcrumbs &&
                props.breadcrumbs.map((breadcrumb, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        breadcrumb.active
                          ? "breadcrumb-item active"
                          : "breadcrumb-item"
                      }
                    >
                      {breadcrumb.path ? (
                        <a href={breadcrumb.path}>{breadcrumb.title}</a>
                      ) : (
                        breadcrumb.title
                      )}
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
