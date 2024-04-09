import { useState } from "react";
import Datalist from "../../components/Datalist";
import {
  useFetchContactForms,
  useSetMarkAsReadedContactForms,
} from "./hooks/useContactForms";
import ContactForm from "./types/ContactForm";
import { TableRequest } from "../../types/ApiTypes";
import Modal from "../../components/Modal";

const ContactFormsPage = () => {
  const [req, setReq] = useState<TableRequest>({
    page: 0,
    limit: 100,
    query: null,
  });
  const [selectedContacts, setSelectedContacts] = useState<ContactForm[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactForm | null>(
    null
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  const { isLoading, data, error, refetch, isRefetching, isError } =
    useFetchContactForms(req);

  const { setMarkAsReaded } = useSetMarkAsReadedContactForms();

  const handleMarkAsReaded = async () => {
    if (selectedContacts) {
      const ids: number[] = Array.from(selectedContacts).map(
        (contact) => contact.id
      );
      await setMarkAsReaded(ids);
      setSelectedContacts([]);
      refetch();
    }
  };

  const addSelectItem = (contact: ContactForm) => {
    setSelectedContacts((prevContacts) => {
      const isSelected = prevContacts.some((contact) => contact.id === contact.id);
      if (isSelected) {

        return prevContacts.filter((contact) => contact.id !== contact.id);
      } else {
        return [...prevContacts, contact];
      }
    });
  };

  return (
    <div>
      <Modal
        title="İletişim Formu Detayı"
        content={
          <div>
            <p>
              Adı :
              <span className="font-weight-bold">{selectedContact?.name}</span>
            </p>
            <p>
              E-Posta :
              <span className="font-weight-bold">{selectedContact?.email}</span>
            </p>
            <p>
              Konu :
              <span className="font-weight-bold">
                {selectedContact?.subject}
              </span>
            </p>
            <p>
              Mesaj :
              <span className="font-weight-bold">
                {selectedContact?.message}
              </span>
            </p>
          </div>
        }
        show={showModal}
        onClose={() => setShowModal(false)}
        footerButtons={[
          <button
            key="cancel"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Kapat
          </button>,
        ]}
      />
      <Datalist
        selectable
        selectedItems={selectedContacts}
        onSearched={(query) => {
          setReq({ ...req, query: query });
        }}
        onChangePage={(page) => {
          console.log(page);
          setReq({ ...req, page });
        }}
        onSelect={addSelectItem}
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
          {
            onRender: (item: ContactForm) =>
              item.readed ? (
                <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-envelope" aria-hidden="true"></i>
              ),
          },
          {
            onRender: (item: ContactForm) => (
              <button
                type="button"
                className="btn btn-primary mini"
                data-toggle="modal"
                data-target="#contactFormModal"
                onClick={() => {
                  setSelectedContact(item);
                  setShowModal(true);
                }}
              >
                <i className="fa fa-eye" aria-hidden="true"></i>
              </button>
            ),
          },
        ]}
        currentPage={data?.currentPage}
        totalPage={data?.totalPage}
        totalRecord={data?.totalRecord}
        loading={isLoading || isRefetching}
        searchable
        title="İletişim Formları"
        filters={[
          {
            icon: "fa fa-refresh",
            onClick: refetch,
          },
          {
            icon: "fa fa-envelope",
            onClick: handleMarkAsReaded,
            label: "Okundu",
          },
          // {
          //   label: "Tümü",
          //   icon: "fa fa-filter",
          //   items: [
          //     {
          //       label: "Okunmayanlar",
          //     },
          //     {
          //       label: "Okunanlar",
          //     },
          //   ],
          // },
        ]}
      />
    </div>
  );
};

export default ContactFormsPage;
