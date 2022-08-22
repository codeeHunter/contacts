import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { rules } from "../../utils/rule";

const id = Math.floor(Math.random() * 9999999999);

const AddContact: FC = () => {
  const { contact } = useTypedSelector((state) => state.contact);

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setContact } = useActions();
  const [form] = Form.useForm();

  const submit = () => {
    setContact([{ username, email, id }, ...contact]);
    form.resetFields();
  };

  return (
    <Form onFinish={submit} form={form} className="form" autoComplete="off">
      <Form.Item
        label="Имя"
        name="Имя"
        rules={[rules.required("Пожалуйста, введите имя контакта!")]}
      >
        <Input
          value={username}
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
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.currentTarget.value);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddContact;
