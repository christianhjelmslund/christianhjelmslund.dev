import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Card from "./components/UI/Card/Card"

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={() => <Card>This is the home page</Card>}/>
            <Route path={"/posts"} component={() => <Card>This is the posts page</Card>}/>
            <Route path={"/investing"} component={() => <Card>This is the investing page</Card>}/>
            <Redirect to={"/"}/>
        </Switch>
    )

    return (
        <Suspense fallback={<div/>}>
            <BrowserRouter>
                <Layout>
                {routes}
                </Layout>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;