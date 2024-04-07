import Datalist from "../components/Datalist";

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const generateSampleData = (): Contact[] => {
  const sampleData: Contact[] = [];

  for (let i = 1; i <= 20; i++) {
    sampleData.push({
      id: i,
      name: `Name ${i}`,
      email: `email${i}@example.com`,
      subject: `Subject ${i}`,
      message: `Message ${i}`,
    });
  }

  return sampleData;
};

const sampleData: Contact[] = generateSampleData();

const ContactForms = () => {
  return (
    <Datalist
      items={sampleData}
      listRows={[
        { field: "id" },
        { field: "name" },
        { field: "email" },
        { onRender: (item: Contact) => <span>{item.subject}</span> },
      ]}
      selectable
      loading={false}
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
