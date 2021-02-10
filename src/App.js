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
            <Route path={"/posts"} exact component={Posts}/>
            <Route path={"/about-me"} component={AboutMe}/>
            <Route path={"/investing"} component={() => <Button variant="primary">Primary</Button>}/>
            <Route path={"/posts/:postId"} component={PostPage}/>
            <Redirect to={"/posts"}/>
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