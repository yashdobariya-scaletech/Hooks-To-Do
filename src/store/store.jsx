// import { createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducer'
// import { combineReducers } from 'redux'

// const mainReducer = combineReducers({main: rootReducer, test: {}})

// const initialState = []

// // const Store = () => {
// //     return createStore(
// //         rootReducer,
// //         initialState,
// //         applyMiddleware(thunk)
// //     );
// // }

// const Store = configureStore({
//     reducer: rootReducer,
// })
// export default Store; 

import { legacy_createStore as createStore} from 'redux';
import { applyMiddleware} from "redux";
import thunk from "redux-thunk";

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
