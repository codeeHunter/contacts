import { Form, Input } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ItemsContact from "./ItemsContact";

const SearchContact: FC = () => {
  const [value, setValue] = useState("");
  const { fetchContact } = useActions();
  const { contact } = useTypedSelector((state) => state.contact);

  const sortContact = [
    ...contact.filter(
      (item) =>
        item.username.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    ),
  ];

  const sortedAndSearchedPosts = () => {
    return sortContact;
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <>
      <Form>
        <Form.Item label="Поиск">
          <Input
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              sortedAndSearchedPosts();
            }}
          />
        </Form.Item>
      </Form>
      <ItemsContact sortedContact={sortContact} />
    </>
  );
};

export default SearchContact;
