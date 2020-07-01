import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Posts from "./containers/Posts/Posts"
import Card from "./components/UI/Card/Card"

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={() => <Card>This is the home page</Card>}/>
            <Route path={"/posts"} component={Posts}/>
            <Route path={"/investing"} component={() => <Card>This is the investing page</Card>}/>
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