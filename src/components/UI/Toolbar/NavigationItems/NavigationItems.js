import React from "react";
import styles from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/posts">Posts</NavigationItem>
            <NavigationItem link="/investing">Investing</NavigationItem>
        </ul>
    )
}

export default NavigationItems