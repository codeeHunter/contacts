import { Layout, Row } from "antd";
import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { useActions } from "./hooks/useAction";
import { IUser } from "./models/IUser";

const App = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer className="footer">
        <Row justify="center">
          <h2>Created Kokonov Ilya</h2>
        </Row>
      </Layout.Footer>
    </Layout>
  );
};

export default App;
