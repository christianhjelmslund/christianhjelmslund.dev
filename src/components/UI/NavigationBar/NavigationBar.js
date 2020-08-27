import React from "react"
import NavigationItems from "./NavigationItems/NavigationItems";
import styles from "./NavigationBar.module.css"

import GithubIcon from "../../../assets/images/github.svg"
import LinkedInIcon from "../../../assets/images/linkedin.svg"
import FacebookIcon from "../../../assets/images/facebook.svg"

import ExternalNavigation from "../ExternalNavigation";

import {Row, Col} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <header className={styles.NavigationBar}>
            <nav>
                <NavigationItems/>
            </nav>
            <Row style={{
                position: "absolute",
                right: "5px"}}>
                <Col>
                    <ExternalNavigation src={GithubIcon} alt={"Github"}
                                        link={"https://github.com/christianhjelmslund"}/>
                </Col>
                <Col>
                    <ExternalNavigation src={LinkedInIcon} alt={"LinkedIn"}
                                        link={"https://www.linkedin.com/in/christian-hjelmslund/"}/>
                </Col>
                <Col>
                    <ExternalNavigation src={FacebookIcon} alt={"Facebook"}
                                        link={"https://www.facebook.com/ChristianHjelmslund/"}/>
                </Col>
            </Row>
        </header>
    )
}

export default NavigationBar