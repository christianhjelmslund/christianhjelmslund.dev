import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import TestComponent from "./testComponent";

const App = () => {
    return (
        <BrowserRouter>
            {/*<Route path="/test-component" component={TestComponent}/>*/}
            <Route path={"/test-component"}
                   render={() => <TestComponent>This is a test component...</TestComponent>}/>
            <Route path={"/"}
                   exact
                   component={() => <p>Main page - go to /test-component to see if routing works</p>}/>

        </BrowserRouter>
    );
}

export default App;