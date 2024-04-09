import { useState } from "react";
import Datalist from "../../components/Datalist";
import { useFetchContactForms } from "./hooks/useContactForms";
import ContactForm from "./types/ContactForm";
import { TableRequest } from "../../types/ApiTypes";
import Modal from "../../components/Modal";

const ContactFormsPage = () => {
  const [req, setReq] = useState<TableRequest>({
    page: 0,
    limit: 100,
    query: null,
  });
  const [selectedItem, setSelectedItem] = useState<ContactForm | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isLoading, data, error, refetch, isRefetching, isError } =
    useFetchContactForms(req);

  return (
    <div>
      <Modal
        title="İletişim Formu Detayı"
        content={
          <div>
            <p>
              Adı :
              <span className="font-weight-bold">{selectedItem?.name}</span>
            </p>
            <p>
              E-Posta :
              <span className="font-weight-bold">{selectedItem?.email}</span>
            </p>
            <p>
              Konu :
              <span className="font-weight-bold">{selectedItem?.subject}</span>
            </p>
            <p>
              Mesaj :
              <span className="font-weight-bold">{selectedItem?.message}</span>
            </p>
          </div>
        }
        show={showModal}
        onClose={() => setShowModal(false)}
        footerButtons={[
          <button key="save" className="btn btn-primary" onClick={() => {}}>
            Okundu olarak işaretle
          </button>,
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
        onSearched={(query) => {
          setReq({ ...req, query: query });
        }}
        onChangePage={(page) => {
          console.log(page);
          setReq({ ...req, page });
        }}
        onSelect={(item: ContactForm) => {
          console.log(item);
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
                  setSelectedItem(item);
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
