
const initialState: string[] = []

const DeleteTask = (state: string[] = initialState, action: any) => {
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