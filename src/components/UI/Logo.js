import React from "react";

import ImageLogo from "../../assets/images/home.svg"
import {NavLink} from "react-router-dom";

const Logo = () => (
    <div style={{
        position: "absolute",
        left: "0px"
    }}>
        <NavLink to={"/"} exact>
            <img src={ImageLogo} alt={"Logo"}/>
        </NavLink>
    </div>
)

export default Logo