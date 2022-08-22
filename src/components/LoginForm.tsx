import { Button, Form, Input } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rule";

const LoginForm: FC = () => {
  const navigation = useNavigate();
  const { error, isLoading, isAuth } = useTypedSelector((state) => state.auth);

  const { login } = useActions();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    login(username, password);
  };

  useEffect(() => {
    if (isAuth) {
      return navigation("/contact");
    }
  }, [isAuth, navigation]);

  return (
    <Form onFinish={submit}>
      {error && <h5 className="error">{error}</h5>}

      <Form.Item
        label="Имя пользователя"
        name="Username"
        rules={[rules.required("Пожалуйста, введите имя пользователя!")]}
      >
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Пожалуйста, введите пароль!")]}
      >
        <Input.Password
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
