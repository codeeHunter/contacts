import { Button, Card, List, Modal } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { IContact } from "../../models/IContact";
import EditForm from "./EditForm";

interface IContactProps {
  sortedContact: IContact[];
}

const ItemsContact: FC<IContactProps> = ({ sortedContact }) => {
  const { deleteContact, editContact } = useActions();
  const [modalVisible, setModalVisible] = useState(false);
  const [contactId, setContact] = useState(-1);

  const removeContact = (id: number) => {
    deleteContact(id);
  };

  const editForm = (event: IContact) => {
    setModalVisible(false);
    editContact(event);
  };

  return (
    <>
      <List
        pagination={{
          pageSize: 4,
          defaultPageSize: 1,
          total: sortedContact.length,
        }}
        split={true}
        itemLayout="horizontal"
        className="list-contacts"
        dataSource={sortedContact}
        renderItem={(item) => (
          <Card className="list-item">
            <List.Item>
              <List.Item.Meta
                title={item.username}
                className="contact-item"
                description={item.email}
              />
              <Button
                className="btn-contact"
                onClick={() => {
                  setModalVisible(true);
                  setContact(item.id);
                }}
              >
                Редактировать
              </Button>
              <Button
                className="btn-contact"
                onClick={() => removeContact(item.id)}
              >
                Удалить
              </Button>
            </List.Item>
          </Card>
        )}
      />
      <Modal
        centered
        title={"Редактирование контакта"}
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EditForm
          id={contactId}
          submit={editForm}
          sortedContact={sortedContact}
        />
      </Modal>
    </>
  );
};

export default ItemsContact;
