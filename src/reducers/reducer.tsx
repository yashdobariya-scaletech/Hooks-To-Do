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
    console.log(action.payload, 'palyload');

    switch (action.type) {
        case 'ADD':
            return { taskList: [...state.taskList, action.payload] }
        case 'UPDATE':
            const taskList = [...state.taskList]
            taskList[action.payload.index] = action.payload.task
            return {
                taskList: [...taskList]
            }
        case 'DELETE':
            const userTaskList = [...state.taskList]
            userTaskList.splice(action.payload, 1)
            return { taskList: [...userTaskList] }
        default:
            return state;
    }
}

export default RootReducer;