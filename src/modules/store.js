import {
    createStore,
    // applyMiddleware
} from 'redux'

import reducer from './reducer'


export default function configure(initialStore) {
    const store = createStore(reducer, initialStore)
    return store;
}