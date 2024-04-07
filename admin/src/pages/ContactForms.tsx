import Datalist from "../components/Datalist";

const ContactForms = () => {
  return (
    <Datalist
      loading={true}
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

export default ContactForms;
