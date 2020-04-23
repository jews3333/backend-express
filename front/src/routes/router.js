import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Data, Upload, Board, View } from './index';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Board}/>
                <Route path="/data" component={Data}/>
                <Route path="/upload" component={Upload}/>
                <Route path="/board/:idx" component={View}/>
                <Route path="/board" component={Board}/>
            </Switch>
        </Router>
    )
}

export default Routes;