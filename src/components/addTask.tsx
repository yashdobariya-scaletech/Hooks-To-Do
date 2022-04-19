import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

interface Props {
    task: string;
    onChange: (e: any) => void;
    onAdd: (e: any) => void;
    onUpdate: (e: any) => void;
    onEdit: boolean;
}

const AddTask: React.FC<Props> = (props) => {

    const task = useSelector((state) => state)
    console.log(task, 'tttttttt');


    return (
        <div>
            <TextField
                label="Add Task"
                value={task}
                onChange={(e) => props.onChange(e)}
            />
            {!props.onEdit ?
                <Button className="btn" variant="contained" onClick={(e) => props.onAdd(e)} >Add</Button>
                :
                <Button type="submit" className="btn" variant="contained" onClick={(e) => props.onUpdate(e)} >Update</Button>
            }
        </div >
    )
}

export default AddTask