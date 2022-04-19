import { TextField, Button } from "@mui/material";

interface Props {
    task: string;
    onChange: (e: any) => void;
    onAdd: (e: any) => void;
    onUpdate: (e: any) => void;
    onEdit: boolean;
}

const AddTask: React.FC<Props> = (props) => {

    return (
        <div>
            <TextField
                label="Add Task"
                value={props.task}
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