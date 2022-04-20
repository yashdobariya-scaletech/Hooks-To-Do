import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from '../actionCreater/action'
import { State } from "../reducers/interface";

interface Props {
    // task: string;
    // onChange: (e: any) => void;
    // onAdd: (e: any) => void;
    // onUpdate: (e: any) => void;
    onEdit: boolean;
    updateIndex: any;
}

const AddTask: React.FC<Props> = (props) => {
    const [task, setTask] = useState('')

    const userTaskList: string[] = useSelector((state: State) => state.taskList || [])
    const value = userTaskList[props.updateIndex]
    setTask(value)

    // const task = useSelector((state) => state)
    // console.log(task, 'tttttttt');
    const disptach: any = useDispatch();

    const handleTask = (e: any) => {
        if (e && e.target && e.target.value) {
            setTask(e.target.value)
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
                <Button className="btn" variant="contained" onClick={() => {
                    disptach(actionCreators.addTask(task))
                    setTask('')
                }} >Add</Button>
                :
                <Button type="submit" className="btn" variant="contained" onClick={() => disptach(actionCreators.updateTask())} >Update</Button>
            }
        </div >
    )
}

export default AddTask