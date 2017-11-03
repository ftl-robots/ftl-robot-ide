import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    IndexRoute
} from 'react-router-dom';

// Import all our high level containers
import App from '../App';

class AppRouter extends Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Router>
                <App />
            </Router>
        );
    }
}

export default AppRouter;