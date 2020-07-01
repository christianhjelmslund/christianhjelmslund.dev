import React from "react";
import Toolbar from "../../components/UI/Toolbar/Toolbar"

const Layout = props => {
    return (
        <React.Fragment>
            <Toolbar/>
            <main style={{marginTop: "72px"}}>{props.children}</main>
        </React.Fragment>
    )

}

export default Layout