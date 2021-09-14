import React from "react";
import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "ux-autoroute";

const Main = () => {
    const { config, routers } = useRouter();
    // console.log(config)
    return (
        <>
            {config?.htmlmeta?.title}
            <ul>
                {routers.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            {item?.config?.htmlmeta?.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div>
                <RouterView />
            </div>
        </>
    );
};

export default Main;
