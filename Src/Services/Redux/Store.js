import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Rootreducer } from './Rootreducer'


const composeEnhancers = compose

export const store = createStore(Rootreducer, composeEnhancers(applyMiddleware(thunk)))