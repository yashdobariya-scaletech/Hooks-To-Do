import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

interface Props {
  taskData: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<Props> = (props) => {

  console.log(props.taskData, 'asdasd')
  return (
    <>
      <div className='list-wrap'>
        <div>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <div className='task-list-wrap'>
              {props.taskData.map((task, i) => (
                <div className='d-flex' key={i}>
                  <div className='task-list'>
                    <ListItem>
                      <ListItemText primary={task} />
                    </ListItem>
                    <Divider />
                  </div>
                  <div className='d-flex'>
                    <div>
                      <Button variant="contained" onClick={() => props.onEdit(i)}>
                        Edit
                      </Button>
                    </div>
                    <div>
                      <Button variant="outlined" onClick={() => props.onDelete(i)} startIcon={<DeleteIcon />}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </List>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

export default TaskList