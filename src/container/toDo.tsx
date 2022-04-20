import { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from '../components/addTask'
import TaskList from '../components/taskList'
import { State } from "../reducers/interface";


const ToDo = () => {
    // const [task, setTask] = useState('')
    // const [userTaskList, setUserTaskLIst] = useState([] as string[])
    const [edit, isEdit] = useState(false)
    // const [edit, isEdit] = useState(false)

    const [updateIndex, setUpdateIndex] = useState(Number)

    const userTaskList: string[] = useSelector((state: State) => state.taskList || [])

    // const handleTask = (e: any) => {
    //     if (e && e.target && e.target.value) {
    //         setTask(e.target.value)
    //     }
    // }

    // const handleAddTask = (e: any) => {
    //     if (!edit && task != '') {
    //         setUserTaskLIst([...userTaskList, task])
    //         setTask('')
    //     }
    // }

    // const handleUpdateTask = () => {
    //     if (edit) {
    //         const userTaskarray = [...userTaskList];
    //         userTaskarray[updateIndex] = task
    //         setUserTaskLIst(userTaskarray)
    //         isEdit(false)
    //         // setTask('')
    //     }
    // }

    const handleEditTask = (index: number) => {
        isEdit(true)
        setUpdateIndex(index)
        // const userTaskarray = [...userTaskList];
        // const value = userTaskList[index]
        // setTask(value)
    }

    // const handleDeleteTask = (index: number) => {
    //     const userTaskarray = [...userTaskList];
    //     userTaskarray.splice(index, 1)
    //     setUserTaskLIst(userTaskarray)
    // }

    return (
        <div>
            <AddTask
                // task={task}
                // onChange={handleTask}
                // onAdd={handleAddTask}
                onEdit={edit}
                updateIndex={updateIndex}
            // onUpdate={handleUpdateTask}
            />
            <TaskList
                taskData={userTaskList}
                onEdit={handleEditTask}
            // onDelete={handleDeleteTask}
            />

        </div>
    )
}

export default ToDo;