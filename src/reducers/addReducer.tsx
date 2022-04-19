
const AddTask = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD':
            return {
                adding: action.payload
            }
        default:
            return state;
    }
}

export default AddTask;