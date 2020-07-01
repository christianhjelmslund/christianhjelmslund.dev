import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Layout from "./containers/Layout/Layout";

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/"} exact component={() => <p>This is the home page</p>}/>
            <Route path={"/posts"} component={() => <p>This is the posts page</p>}/>
            <Route path={"/investing"} component={() => <p>This is the investing page</p>}/>
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