import React from "react";
import { Button, Form, Input } from "antd";

// this is form a form component i.e for text fill form
const FormContainer = ({ label, name }) => {
  return (
    <Form.Item label={label} name={name}>
      <Input />
    </Form.Item>
  );
};
export default FormContainer;
