import styles from "../../styles/Card.module.css";
import React, { useState } from "react";
import {
  HeartOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  ChromeOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Card } from "antd";
import { Typography } from "antd";
import ModalComponent from "../Modal";
import FormContainer from "../Form";
import { Button, Form } from "antd";
import { toast } from "react-toastify";
import actions from "../../redux/user/actions";
import { useDispatch } from "react-redux";
const { Meta } = Card;

export default function CardComponent({ user, email, number, website, id }) {
  const detailiconstyle = {
    fontSize: "18px",
  };
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [fav, setFav] = useState(false);

  const handlefav = () => {
    setFav(!fav);
    if (fav) {
      toast(`${user} removed from favourite`);
    } else toast(`${user} added to favourite`);
  };
  const handleDelete = (id) => {
    dispatch(actions.deleteUsers(id));
  };

  return (
    <div className={styles.card}>
      <ModalComponent
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        content={<FormField />}
      />
      <Card
        cover={
          <img
            alt="example"
            src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
            height="250"
          />
        }
        actions={[
          <>
            {fav ? (
              <HeartFilled
                key="fav"
                onClick={handlefav}
                style={{ color: "red", fill: "red", fontSize: "20px" }}
              />
            ) : (
              <HeartOutlined
                onClick={handlefav}
                key="fav"
                style={{ color: "red", fill: "red", fontSize: "20px" }}
              />
            )}
          </>,
          <EditOutlined
            key="edit"
            onClick={showModal}
            style={{ color: "#000", fontSize: "20px" }}
          />,
          <DeleteOutlined
            key="delete"
            onClick={() => handleDelete(id)}
            style={{ color: "#000", fontSize: "20px" }}
          />,
        ]}
      >
        <Meta title={user} />
        <div style={{ marginTop: "10px" }}>
          <IconWithData
            Icon={<MailOutlined style={detailiconstyle} />}
            data={email}
          />
          <IconWithData
            Icon={<PhoneOutlined style={detailiconstyle} />}
            data={number}
          />
          <IconWithData
            Icon={<ChromeOutlined style={detailiconstyle} />}
            data={website}
          />
        </div>
      </Card>
    </div>
  );
}

const FormField = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
      >
        <FormContainer label="Name" name="name" />
        <FormContainer label="Email" name="email" />
        <FormContainer label="Phone" name="phone" />
        <FormContainer label="Website" name="website" />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const IconWithData = ({ Icon, data }) => {
  return (
    <div className={styles.detailscontainer}>
      <div className={styles.iconwithdata}>
        {Icon}
        <Typography className={styles.iconwithdatatext}>{data}</Typography>
      </div>
    </div>
  );
};
