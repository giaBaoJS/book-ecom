import Modal from "antd/lib/modal/Modal";
import React from "react";
import { CLOSE_MODAL } from "../../../constants/index.js";
import { useDispatch, useSelector } from "react-redux";
const ModalForm = (Component) => {
  const { isOpenModal } = useSelector((state) => state.modalFormReducer);
  const dispatch = useDispatch();
  const onCancel = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  return ({ title }) => {
    return (
      <Modal
        title={title}
        visible={isOpenModal}
        onCancel={onCancel}
        footer={null}
      >
        <Component onCancel={onCancel} />
      </Modal>
    );
  };
};

export default ModalForm;
