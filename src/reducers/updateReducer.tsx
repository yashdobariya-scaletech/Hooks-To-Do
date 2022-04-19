
const UpdateTask = (state: any, action: any) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                updateing: action.payload
            }
        default:
            return state;
    }
}

export default UpdateTask;