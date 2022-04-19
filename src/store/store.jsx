import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducer'

const initialState = []

const Store = () => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export default Store; 