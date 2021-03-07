import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import './custom.scss'
import Layout from "./components/Layout/Layout";
import Posts from "./containers/Posts/Posts"
import PostPage from "./containers/Posts/Post/PostPage"
import About from "./components/AboutMe/About"
import Emoji from "./components/Emoji/Emoji";

const App = () => {

    let routes = (
        <Switch>
            <Route path={"/posts"} exact component={Posts}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/investing"} component={() => <p className={"under-construction"}>Under Construction... <Emoji symbol={"🏗"}/>️</p>}/>
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