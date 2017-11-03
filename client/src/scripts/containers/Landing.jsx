import React, { Component } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';

import LandingPage from '../components/pages/LandingPage';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recentProjects: []
        };
    }

    componentWillMount() {
        // Do thing with resize window?
    }

    render() {
        const { recentProjects } = this.state;

        return (
            <LandingPage
                recentProjects={recentProjects}
                onOpen={(path) => {
                    //dispatch an action
                }}
                onCreateNew={() => {
                    //dispatch an action
                }} />
        )
    }
};

export default Landing;