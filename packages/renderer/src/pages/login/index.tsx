import React from "react";
import { useRouter } from "ux-autoroute";

const Login = () => {
    const { config } = useRouter();
    return <>{config?.htmlmeta?.title}</>;
};

export default Login;
