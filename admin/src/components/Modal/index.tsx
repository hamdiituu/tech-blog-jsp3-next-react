import React from "react";

interface ModalProps {
  title: string;
  content: React.ReactNode;
  show: boolean;
  onClose: () => void;
  footerButtons?: React.ReactNode[];
  closeable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  show,
  onClose,
  footerButtons,
  closeable,
}) => {
  return (
    <>
      {show && (
        <div className="modal-backdrop fade show"></div>
      )}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              {closeable !== false && (
                <button
                  type="button"
                  className="close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              )}
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              {footerButtons &&
                footerButtons.map((button, index) => (
                  <React.Fragment key={index}>{button}</React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
