import { Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { FC } from "react";
import AddContact from "./AddContact";
import SearchContact from "./SearchContact";

const Contacts: FC = () => {
  return (
    <Content className="contacts">
      <Row justify="center">
        <AddContact />
        <SearchContact />
      </Row>
    </Content>
  );
};

export default Contacts;
