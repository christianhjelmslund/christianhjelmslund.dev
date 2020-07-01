import React from "react";
import Toolbar from "../../components/UI/Toolbar/Toolbar"

const Layout = props => {
    return (
        <React.Fragment>
            <Toolbar/>
            <main style={{marginTop: "110px"}}>{props.children}</main>
        </React.Fragment>
    )

}

export default Layout