import React from "react"

import GithubIcon from "../../../assets/images/github.svg"
import LinkedInIcon from "../../../assets/images/linkedin.svg"
import FacebookIcon from "../../../assets/images/facebook.svg"

import ExternalNavigation from "../StyledComponents/ExternalNavigation";

import {Navbar, Nav} from "react-bootstrap"
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationBar = () => {
    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor: "black"}}>
            <Navbar.Brand>
                <NavigationItem exact link="/">christianhjelmslund.dev</NavigationItem>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavigationItem link="/posts">Posts</NavigationItem>
                    <NavigationItem link="/investing">Investing</NavigationItem>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <ExternalNavigation src={GithubIcon} alt={"Github"}
                                        link={"https://github.com/christianhjelmslund"}/>
                    <ExternalNavigation src={LinkedInIcon} alt={"LinkedIn"}
                                        link={"https://www.linkedin.com/in/christian-hjelmslund/"}/>
                    <ExternalNavigation src={FacebookIcon} alt={"Facebook"}
                                        link={"https://www.facebook.com/ChristianHjelmslund/"}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar