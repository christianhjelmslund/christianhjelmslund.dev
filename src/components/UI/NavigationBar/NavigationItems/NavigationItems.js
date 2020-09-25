import React from "react";
import styles from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";
// import Logo from "../../Logo";

const NavigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            {/*<Logo/>*/}
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/posts">Posts</NavigationItem>
            <NavigationItem link="/investing">Investing</NavigationItem>
        </ul>
    )
}

export default NavigationItems