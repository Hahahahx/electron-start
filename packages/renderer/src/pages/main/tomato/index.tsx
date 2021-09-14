import React from "react";
import { useRouter } from "ux-autoroute";

const Tomato = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Tomato;
