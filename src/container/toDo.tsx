import { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from '../components/taskField'
import TaskList from '../components/taskList'
import { State } from "../reducers/interface";


const ToDo = () => {
    const [edit, isEdit] = useState(false)
    const [updateIndex, setUpdateIndex] = useState(Number)
    const userTaskList: string[] = useSelector((state: State) => state.taskList || [])

    const handleEditTask = (index: number) => {
        isEdit(true)
        setUpdateIndex(index)
    }

    return (
        <div>
            <AddTask
                onEdit={edit}
                updateIndex={updateIndex}
                isUpdate={isEdit}
            />
            <TaskList
                taskData={userTaskList}
                onEdit={handleEditTask}
            />

        </div>
    )
}

export default ToDo;