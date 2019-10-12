import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const enhancers = [logger];
const middleware = applyMiddleware(...enhancers);

export default createStore(rootReducer, middleware);
