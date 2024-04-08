import Datalist from "../../components/Datalist";
import { useFetchContactForms } from "./hooks/useContactForms";
import ContactForm from "./types/ContactForm";

const ContactFormsPage = () => {
  const { isLoading, data, error } = useFetchContactForms({
    page: 0,
  });

  return (
    <Datalist
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
      loading={isLoading}
      searchable
      title="İletişim Formları"
      filters={[
        {
          icon: "fa fa-refresh",
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
