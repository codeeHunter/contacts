import { Row } from "antd";
import React, { FC } from "react";
import Contacts from "../components/Contacts/Contacts";

const ListContact: FC = () => {
  return (
    <Row justify="center">
      <Contacts />
    </Row>
  );
};

export default ListContact;
