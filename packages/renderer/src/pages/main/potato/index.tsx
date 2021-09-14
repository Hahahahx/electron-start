import React from "react";
import { useRouter } from "ux-autoroute";

const Potato = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Potato;
