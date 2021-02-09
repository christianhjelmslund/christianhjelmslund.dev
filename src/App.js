import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import './custom.scss'
import Layout from "./components/Layout/Layout";
import Posts from "./containers/Posts/Posts"
import PostPage from "./containers/Posts/Post/PostPage"
import AboutMe from "./components/AboutMe/AboutMe"
import Button from "react-bootstrap/Button"


const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={Posts}/>
            <Route path={"/about-me"} component={AboutMe}/>
            <Route path={"/investing"} component={() => <Button variant="primary">Primary</Button>}/>
            <Route path={"/post/:userId"} component={PostPage}/>
            <Redirect to={"/"}/>
        </Switch>
    )

    return (
        <BrowserRouter>
            <Layout >
                {routes}
            </Layout>
        </BrowserRouter>
    );
}

export default App;