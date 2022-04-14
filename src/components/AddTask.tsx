import { TextField, Button } from "@mui/material";
import TaskList from './TaskList'
import { useState } from "react";

interface Task {
    data: string
}

const AddTask = () => {
    const [task, setTask] = useState('')
    const [userTaskList, setUserTaskLIst] = useState([] as string[])

    const handleTask = (e: any) => {
        if (e && e.target && e.target.value) {
            setTask(e.target.value)
        }
    }

    const handleAddTask = () => {
        const userTaskarray = [...userTaskList];
        userTaskarray.push(task)
        setUserTaskLIst(userTaskarray)
    }

    const handleEditTask = (id: number) => {
        console.log(id, 'edit ');

    }

    const handleDeleteTask = () => {
        console.log('delete karne bhai');
    }

    return (
        <div>
            <TextField
                label="Add Task"
                value={task}
                onChange={handleTask}
            />
            <Button className="btn" variant="contained" onClick={handleAddTask} >Add</Button>
            <TaskList
                taskData={userTaskList}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
            />
        </div>
    )
}

export default AddTask