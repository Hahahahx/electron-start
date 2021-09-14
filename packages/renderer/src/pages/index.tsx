import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "ux-autoroute";
import { useElectron } from "../use/electron";

const Index = () => {
  const { config, routers, history } = useRouter();

  const { getModal, versions } = useElectron();
  console.log(versions);
  // console.log(routers);

  return (
    <>
      <Button
        onClick={() => {
          getModal("/main");
        }}
      >
        open
      </Button>
      <ul>
        <li> {config?.htmlmeta?.title}</li>
        {routers.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item?.config?.htmlmeta?.title}</NavLink>
          </li>
        ))}
      </ul>
      <div>
        {history.location.pathname != "/main"}
        <RouterView />
      </div>
    </>
  );
};

export default Index;
