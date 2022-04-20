const initialState: string[] = []

const EditTask = (state: string[] = initialState, action: any) => {
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