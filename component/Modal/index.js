import React, { useState } from "react";
import styles from "../../styles/Modal.module.css";
import { Button, Modal } from "antd";

// a component for the modal
const ModalComponent = ({
  title,
  content,
  handleOk,
  handleCancel,
  isModalOpen,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.modalcontainer}>{content}</div>
      </Modal>
    </>
  );
};
export default ModalComponent;
