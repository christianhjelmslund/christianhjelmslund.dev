import React, {useState} from "react"

import GithubIcon from "../../../assets/images/github.svg"
import LinkedInIcon from "../../../assets/images/linkedin.svg"
import FacebookIcon from "../../../assets/images/facebook.svg"

import ExternalNavigation from "../StyledComponents/ExternalNavigation";

import {Navbar, Nav, Row, Container} from "react-bootstrap"
import NavigationItem from "./NavigationItem/NavigationItem";


const NavigationBar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = (collapse) => setIsNavCollapsed(collapse);

    const navBarBody =
        (<React.Fragment>
            <Navbar.Brand>
                <NavigationItem clicked={() => handleNavCollapse(true)} exact link="/">christianhjelmslund</NavigationItem>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => handleNavCollapse(!isNavCollapsed)} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    <NavigationItem clicked={() => handleNavCollapse(true)} link="/posts">Posts</NavigationItem>
                    <NavigationItem clicked={() => handleNavCollapse(true)} link="/investing">Investing</NavigationItem>
                </Nav>
                <Nav>
                    <Container style={{width: "100%"}} fluid={true}>
                        <Row>
                            <ExternalNavigation src={GithubIcon} alt={"Github"}
                                                link={"https://github.com/christianhjelmslund"}/>
                            <ExternalNavigation src={LinkedInIcon} alt={"LinkedIn"}
                                                link={"https://www.linkedin.com/in/christian-hjelmslund/"}/>
                            <ExternalNavigation src={FacebookIcon} alt={"Facebook"}
                                                link={"https://www.facebook.com/ChristianHjelmslund/"}/>
                        </Row>
                    </Container>

                </Nav>
            </Navbar.Collapse>
        </React.Fragment>)

    let navBar
    if (window.screen.width >= 1280) {
        navBar = <Navbar variant="dark" expand="sm" style={{backgroundColor: "black"}}>
            {navBarBody}
        </Navbar>
    } else {
        navBar = <Navbar expanded={!isNavCollapsed} variant="dark" expand="sm" style={{backgroundColor: "black"}}>
            {navBarBody}
        </Navbar>
    }
    return navBar
}

export default NavigationBar