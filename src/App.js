import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import './custom.scss'
import Layout from "./containers/Layout/Layout";
import Posts from "./containers/Posts/Posts"
import Button from "react-bootstrap/Button"

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={() => <p>This is the home page</p>}/>
            <Route path={"/posts"} component={Posts}/>
            <Route path={"/investing"} component={() => <Button variant="primary">Primary</Button>}/>
            <Redirect to={"/"}/>
        </Switch>
    )

    return (
        <BrowserRouter>
            <Layout>
                {routes}
            </Layout>
        </BrowserRouter>
    );
}

export default App;