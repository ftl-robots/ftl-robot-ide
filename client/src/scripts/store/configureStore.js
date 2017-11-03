import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

export default function configureStore() {
    const store = createStore(rootReducer, enhancer);

    return store;
}