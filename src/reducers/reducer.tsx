// import { combineReducers } from 'redux';
// import AddReducer from '../reducers/addReducer'
// import EditReducer from '../reducers/editReducer'
// import DeleteReducer from '../reducers/deleteReducer'
// import UpdateReducer from '../reducers/updateReducer'

import { State } from '../reducers/interface'


// const RootReducer = combineReducers({
//     add: AddReducer,
//     edit: EditReducer,
//     delete: DeleteReducer,
//     update: UpdateReducer,
// });

// export default RootReducer;




const initialState: State = { taskList: [] };

const RootReducer = (state = initialState, action: any) => {
    console.log(state, 'state');
    // console.log(initialState, 'initialState');

    switch (action.type) {
        case 'EDIT':
            return { taskList: [...state.taskList, action.payload] }
        case 'ADD':
            return { taskList: [...state.taskList, action.payload] }
        case 'DELETE':
            return { deleting: action.payload }
        case 'UPDATE':
            return { updating: action.payload }
        default:
            return state;
    }
}

export default RootReducer;