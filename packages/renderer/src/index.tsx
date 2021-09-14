import { Button, Space } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Routers } from "ux-autoroute";
import routeConfig from "./router";

const App = () => {
  const [userAuth, setAuth] = useState(2);
  const routeAuth = [["/tomato", "/potato"], ["/main"]];

  const setUserAuth = (num: number) => {
    return () => {
      setAuth(num);
    };
  };

  const getAuthName = (num?: number) => {
    switch (Number.isInteger(num) ? num : userAuth) {
      case 0:
        return "高级";
      case 1:
        return "中级";
      case 2:
        return "低级";
    }
  };

  return (
    <>
      <Helmet>
        <title>{location.pathname}</title>
      </Helmet>

      <div>您的角色权限：{getAuthName()}</div>
      <Space>
        <Button onClick={setUserAuth(2)}>{getAuthName(2)}</Button>
        <Button onClick={setUserAuth(1)}>{getAuthName(1)}</Button>
        <Button onClick={setUserAuth(0)}>{getAuthName(0)}</Button>
      </Space>
      <Routers
        type="hash"
        routers={routeConfig}
        before={(location) => {
          const { hash } = window.location;
          const result = routeAuth.some((item, index) => {
            return item.some((route) => {
              if (hash.includes(route)) {
                return Number.isInteger(userAuth) ? userAuth > index : true;
              }
            });
          });
          if (result) {
            return <>您无权访问</>;
          }
        }}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
