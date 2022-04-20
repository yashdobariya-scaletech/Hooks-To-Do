
const initialState: string[] = []

const AddTask = (state: string[] = initialState, action: any) => {
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