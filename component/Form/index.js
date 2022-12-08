import React from "react";
import { Button, Form, Input } from "antd";
const FormContainer = ({ label, name }) => {
  return (
    <Form.Item label={label} name={name}>
      <Input />
    </Form.Item>
  );
};
export default FormContainer;
