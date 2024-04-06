interface PageTitleProps {
  title: string;
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <div className="row column_title">
      <div className="col-md-12">
        <div className="page_title">
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
}
