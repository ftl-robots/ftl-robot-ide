import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Workspace from './Workspace';

class App extends Component {
    render() {
       
        return (
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/workspace" component={Workspace}/>
            </Switch>
        )
    }
};

// We will need to connect and mapStateToProps
export default App;