import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import './custom.scss'
import Layout from "./containers/Layout/Layout";
import Posts from "./containers/Posts/Posts"
import Card from "./components/UI/Card/Card"
import Button from "react-bootstrap/Button"

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={() => <Card>This is the home page</Card>}/>
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