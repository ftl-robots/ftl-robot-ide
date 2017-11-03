import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import Router from './Router';

export default class Root extends Component {
    render() {
        const { store } = this.props;
        return(
            
                <div>
                    <Router store={store}/>
                </div>
            
        );
    }
};

// Root.propTypes = {
//     store: PropTypes.object.isRequired,
// };