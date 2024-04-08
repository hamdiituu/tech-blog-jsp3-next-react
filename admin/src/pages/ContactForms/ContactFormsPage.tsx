import { useState } from "react";
import Datalist from "../../components/Datalist";
import { useFetchContactForms } from "./hooks/useContactForms";
import ContactForm from "./types/ContactForm";
import { TableRequest } from "../../types/ApiTypes";

const ContactFormsPage = () => {
  const [req, setReq] = useState<TableRequest>({
    page: 0,
    limit: 100,
    query: null,
  });
  const { isLoading, data, error, refetch, isRefetching, isError } =
    useFetchContactForms(req);

  return (
    <Datalist
      onSearched={(query) => {
        setReq({ ...req, query: query });
      }}
      isError={isError}
      error={error}
      items={data?.items}
      listRows={[
        { field: "id" },
        { field: "name" },
        { field: "email" },
        {
          onRender: (item: ContactForm) => (
            <span>{item.subject.substring(0, 20) + ".."}</span>
          ),
        },
      ]}
      currentPage={data?.currentPage}
      totalPage={data?.totalPage}
      totalRecord={data?.totalRecord}
      selectable
      loading={isLoading || isRefetching}
      searchable
      title="İletişim Formları"
      filters={[
        {
          icon: "fa fa-refresh",
          onClick: refetch,
        },
        {
          label: "Tümü",
          icon: "fa fa-filter",
          items: [
            {
              label: "Okunmayanlar",
            },
            {
              label: "Okunanlar",
            },
          ],
        },
      ]}
    />
  );
};

export default ContactFormsPage;
