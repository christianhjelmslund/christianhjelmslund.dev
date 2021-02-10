import React from "react";
import NavigationBar from "../UI/NavigationBar/NavigationBar";
import BackgroundImage from "../../assets/images/background.svg";

const Layout = props => {
    return (
        <React.Fragment >
            <div style={{
                position: "fixed",
                marginTop: "0%",
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${BackgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}/>
            <NavigationBar/>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout