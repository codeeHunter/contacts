import { Menu, MenuProps, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const navigation = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const items: MenuProps["items"] = isAuth
    ? [
        {
          label: "Logout",
          key: 2,
          onClick: () => {
            logout();
          },
        },
      ]
    : [
        {
          label: "Authorization",
          key: 1,
          onClick: () => {
            navigation("/");
          },
        },
      ];

  useEffect(() => {
    if (isAuth) {
      return navigation("/contact");
    } else {
      return navigation("/");
    }
  }, [isAuth, navigation]);

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div className="username">{user.username}</div>

            <Menu
              theme="dark"
              selectable={false}
              items={items}
              mode="horizontal"
            />
          </>
        ) : (
          <Menu
            theme="dark"
            selectable={false}
            items={items}
            mode="horizontal"
          />
        )}
      </Row>
    </Header>
  );
};

export default Navbar;
