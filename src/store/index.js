import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});
const finalCreateStore = composeEnhancers(
    applyMiddleware(thunkMiddleware),
)(createStore)

const createStoreFactory = (initialState) => {
    return finalCreateStore(rootReducer, initialState)
}

export default createStoreFactory;
