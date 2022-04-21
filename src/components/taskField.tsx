import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from '../actionCreater/action'
import { State } from "../reducers/interface";

interface Props {
    onEdit: boolean;
    updateIndex: any;
    isUpdate: (e: boolean) => void
}

const TaskField: React.FC<Props> = (props) => {
    const [task, setTask] = useState('')
    const [error, isError] = useState(false)
    const userTaskList: string[] = useSelector((state: State) => state.taskList || [])
    const disptach: any = useDispatch();


    useEffect(() => {
        const value = userTaskList[props.updateIndex]
        if (value !== '' && value) {
            setTask(value)
        }
    }, [props.updateIndex])


    const handleTask = (e: any) => {
        if (e && e.target && e.target.value) {
            setTask(e.target.value)
        }
    }


    const handleSubmit = () => {
        if (task !== '' && task) {
            disptach(actionCreators.addTask(task))
            setTask('')
            isError(false)
        } else {
            isError(true)
        }
    }

    return (
        <div>
            <TextField
                label="Add Task"
                value={task}
                onChange={(e) => handleTask(e)}
            />
            {!props.onEdit ?
                <Button className="btn" variant="contained" onClick={handleSubmit} >Add</Button>
                :
                <Button type="submit" className="btn" variant="contained" onClick={() => {
                    (disptach(actionCreators.updateTask(props.updateIndex, task)))
                    props.isUpdate(false)
                    setTask('')
                }} >Update</Button>
            }
            {error && <p>Please Enter task</p>}
        </div >
    )
}

export default TaskField