import { combineReducers } from 'redux';
import AddReducer from '../reducers/addReducer'
import EditReducer from '../reducers/editReducer'
import DeleteReducer from '../reducers/deleteReducer'
import UpdateReducer from '../reducers/updateReducer'


const RootReducer = combineReducers({
    add: AddReducer,
    edit: EditReducer,
    delete: DeleteReducer,
    update: UpdateReducer,
});

export default RootReducer;