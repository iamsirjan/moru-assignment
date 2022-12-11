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

export default function CardComponent({
  user,
  email,
  number,
  website,
  id,
  keyid,
  data,
  allUserData,
}) {
  const detailiconstyle = {
    fontSize: "18px",
  };
  const dispatch = useDispatch();

  // for modal
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

  // function to add user to favourite
  const [fav, setFav] = useState(false);

  const handlefav = () => {
    setFav(!fav);
    if (fav) {
      toast(`${user} removed from favourite`);
    } else toast(`${user} added to favourite`);
  };

  // function to delete user
  const handleDelete = (id) => {
    dispatch(actions.deleteUsers(id));
  };

  // function to edit

  const onFinish = (values) => {
    data.name = values.name;
    data.email = values.email;
    data.phone = values.phone;
    data.website = values.website;
    const updatedvalue = [...allUserData];

    // finding index and updating value to global store
    const index = updatedvalue.indexOf(data);
    updatedvalue[index] = { ...data };

    // dispatching id and updated value to redux
    dispatch(actions.editUsers(id, updatedvalue));
  };
  return (
    <div className={styles.card}>
      {/* modal containing edit form */}
      <ModalComponent
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        content={<FormField onFinish={onFinish} />}
      />

      {/* user card */}
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
            onClick={() => showModal(keyid)}
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

// user edit form

const FormField = ({ onFinish }) => {
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
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button size="large" type="primary" danger htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

// for menu icon creating props

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
