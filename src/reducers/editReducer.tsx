
const EditTask = (state: any, action: any) => {
    switch (action.type) {
        case 'EDIT':
            return {
                editing: action.payload
            }
        default:
            return state;
    }
}

export default EditTask;