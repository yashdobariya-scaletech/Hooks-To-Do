const initialState: string[] = []

const UpdateTask = (state: string[] = initialState, action: any) => {
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