
const DeleteTask = (state: any, action: any) => {
    switch (action.type) {
        case 'DELETE':
            return {
                deleting: action.payload
            }
        default:
            return state;
    }
}

export default DeleteTask;