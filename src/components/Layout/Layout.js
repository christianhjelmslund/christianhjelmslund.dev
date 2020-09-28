import React from "react";
import NavigationBar from "../UI/NavigationBar/NavigationBar"

const Layout = props => {
    return (
        <React.Fragment >
            <NavigationBar />
            <main style={{marginTop: "100px" }}>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout