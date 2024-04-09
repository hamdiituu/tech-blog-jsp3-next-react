import React, { useEffect, useState } from "react";

interface SideItem {
  onClick?: () => void;
  label?: string;
  children?: SideItem[];
  child?: React.FC;
}

interface FilterBtn {
  label?: string;
  icon?: string;
  onClick?: () => void;
  items?: FilterBtn[];
}

interface ListRow<T> {
  field?: string;
  style?: string;
  onRender?: (item: T) => React.ReactElement;
}

interface DatalistProps<T> {
  sideItems?: SideItem[];
  title?: string;
  searchPlaceHolder?: string;
  searchable?: boolean;
  currentPage?: number;
  totalPage?: number;
  totalRecord?: number;
  filters?: FilterBtn[];
  items?: T[];
  listRows?: ListRow<T>[];
  selectable?: boolean;
  loading?: boolean;
  error?: any;
  isError?: boolean;
  onSearched?: (query: string | null) => void;
  onChangePage?: (page: number) => void;
  onSelect?: (item: T) => void;
  selectedItems?: T[];
}

const Datalist = <T extends object>(props: DatalistProps<T>) => {
  const [processCount, setProcessCount] = useState<number>(0);
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: number;

    if (props.loading) {
      intervalId = setInterval(() => {
        setProcessCount((prevCount) => prevCount + 13);
      }, 800);
    }
    return () => clearInterval(intervalId);
  }, [props.loading]);

  const onSearchSubmit = () => {
    if (props.onSearched) {
      props.onSearched(query);
    }
  };

  return (
    <div className="col-md-12">
      <div className="white_shd full margin_bottom_30 mt-5">
        <div className="full inbox_inner_section">
          <div className="row">
            <div className="col-md-12">
              <div className="full padding_infor_info">
                <div className="mail-box">
                  {props.sideItems && (
                    <aside className="sm-side">
                      {props.sideItems.map((sideItem, sideIndex) => (
                        <ul
                          key={sideIndex}
                          className="nav nav-pills nav-stacked labels-category inbox-divider"
                        >
                          {sideItem.label && (
                            <li>
                              <h5>
                                <a onClick={sideItem.onClick} href="#">
                                  {sideItem.label}
                                </a>
                              </h5>
                            </li>
                          )}
                          {sideItem.children?.map(
                            (sideChild, sideChildIndex) => (
                              <li key={sideChildIndex}>
                                <a href="#" onClick={sideChild.onClick}>
                                  <i className="fa fa-circle"></i>{" "}
                                  {sideChild.label}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      ))}
                    </aside>
                  )}
                  <aside className="lg-side">
                    <div className="inbox-head">
                      {props.title && <h3>{props.title}</h3>}
                      {props.searchable && (
                        <div className="pull-right position search_inbox">
                          <div className="input-append">
                            <input
                              name="query"
                              type="text"
                              className="sr-input"
                              placeholder={
                                props.searchPlaceHolder ?? "Tablo içinde ara"
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  onSearchSubmit(); // Enter tuşu basılınca onSubmitFunc fonksiyonunu çağır
                                }
                              }}
                              onChange={(e) => {
                                setQuery(e.target.value);
                              }}
                            />
                            <button
                              className="btn sr-btn"
                              type="button"
                              onClick={onSearchSubmit}
                            >
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="inbox-body">
                      <div className="mail-option">
                        {props.filters?.map((filter, index) => (
                          <div key={index} className="btn-group">
                            <a
                              className="btn mini blue "
                              onClick={filter.onClick}
                              {...(filter.items && {
                                "data-toggle": "dropdown",
                              })}
                            >
                              {filter.icon && (
                                <i
                                  className={`${filter.icon} ${
                                    filter.label && "mr-2"
                                  }`}
                                ></i>
                              )}
                              {filter.label}

                              {filter.items && (
                                <i className="fa fa-angle-down ml-2"></i>
                              )}
                            </a>
                            {filter.items && (
                              <ul className="dropdown-menu">
                                {filter.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <a onClick={item.onClick}>
                                      <i className={item.icon}></i>
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                        <ul className="unstyled inbox-pagination">
                          <li>
                            <span>
                              {props.totalRecord} kayıt içinden{" "}
                              {props.items?.length} tanesi görüntüleniyor.
                            </span>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                if (props.onChangePage) {
                                  props.onChangePage(
                                    (props.currentPage ?? 1) - 1
                                  );
                                }
                              }}
                              disabled={props.currentPage == 0}
                              className={`np-btn ${
                                props.currentPage == 0
                                  ? "np-btn-disable"
                                  : "np-btn"
                              }`}
                            >
                              <i className="fa fa-angle-left pagination-left"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                console.log("click");
                                if (props.onChangePage) {
                                  props.onChangePage(
                                    (props.currentPage ?? 0) + 1
                                  );
                                }
                              }}
                              disabled={
                                props.currentPage == (props.totalPage ?? 1) - 1
                              }
                              className={`np-btn ${
                                props.currentPage == (props.totalPage ?? 1) - 1
                                  ? "np-btn-disable"
                                  : "np-btn"
                              }`}
                            >
                              <i className="fa fa-angle-right pagination-right"></i>
                            </button>
                          </li>
                        </ul>
                      </div>

                      {props.loading && (
                        <div className="progress skill-bar mt-5 mb-5">
                          <div
                            className="progress-bar progress-bar-animated progress-bar-striped"
                            role="progressbar"
                            style={{ width: `${processCount}%` }}
                          ></div>
                        </div>
                      )}

                      {props.isError && (
                        <div className="alert alert-danger" role="alert">
                          {props.error.message ?? props.error}
                        </div>
                      )}

                      <table className="table table-inbox table-hover">
                        <tbody>
                          {props.items != null &&
                            props.items?.length > 0 &&
                            props.items?.map((item, itemIndex: number) => (
                              <tr key={itemIndex}>
                                {props.selectable && (
                                  <td className="inbox-small-cells">
                                    <div className="custom-control custom-checkbox">
                                      <input
                                        onClick={() => {
                                          if (props.onSelect) {
                                            props.onSelect(item);
                                          }
                                        }}
                                        checked={
                                          props.selectedItems?.find(
                                            (selectedItem) =>
                                              selectedItem == item
                                          )
                                            ? true
                                            : false
                                        }
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={`checbox-datalist-${itemIndex}`}
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor={`checbox-datalist-${itemIndex}`}
                                      ></label>
                                    </div>
                                  </td>
                                )}
                                {props.listRows?.map((row, rowIndex) => (
                                  <td
                                    key={itemIndex * 10 + rowIndex}
                                    className={`view-message ${row.style}`}
                                  >
                                    {row.onRender
                                      ? row.onRender(item)
                                      : // @ts-ignore
                                        item[`${row.field}`]}
                                  </td>
                                ))}
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datalist;
