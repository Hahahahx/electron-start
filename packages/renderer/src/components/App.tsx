import React from "react";
import { useElectron } from "../use/electron";

export const App = () => {
  const { getModal, versions } = useElectron();

  console.log(versions);

  return (
    <>
      <button
        onClick={() => {
          getModal("login");
        }}
      >
        open
      </button>
    </>
  );
};
