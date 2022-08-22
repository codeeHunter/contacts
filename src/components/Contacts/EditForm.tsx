import { Button, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { FC, useEffect, useState } from "react";
import { IContact } from "../../models/IContact";
import { rules } from "../../utils/rule";

interface IEditForm {
  id: number;
  submit: (event: IContact) => void;
  sortedContact: IContact[];
}

const EditForm: FC<IEditForm> = ({ id, submit, sortedContact }) => {
  const [form] = useForm();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(sortedContact.filter((item) => item.id === id)[0]?.username);
    setEmail(sortedContact.filter((item) => item.id === id)[0]?.email);
  }, [sortedContact, id]);

  const submitForm = () => {
    submit({ username, email, id });
    form.resetFields();
  };

  return (
    <Form onFinish={submitForm} form={form}>
      <Form.Item
        label="Имя"
        name="Имя"
        rules={[rules.required("Пожалуйста, введите имя контакта!")]}
      >
        <Input
          value={username}
          name="Введите имя"
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Почта"
        name="Почта"
        rules={[rules.required("Пожалуйста, введите почту контакта!")]}
      >
        <Input
          value={email}
          type="email"
          onChange={(event) => {
            setEmail(event.currentTarget.value);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Изменить
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
