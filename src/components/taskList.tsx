import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as actionCreators from '../actionCreater/action'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../reducers/interface';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

interface Props {
  taskData: string[];
  onEdit: (index: number) => void;
  // onDelete: (index: number) => void;
}

const TaskList: React.FC<Props> = (props) => {
  const disptach: any = useDispatch();
  const userTaskList: string[] = useSelector((state: State) => state.taskList || [])
  console.log(userTaskList, 'userTaskList');


  return (
    <>
      <div className='list-wrap'>
        <div>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <div className='task-list-wrap'>
              {userTaskList.map((task, index) => (
                <div className='d-flex' key={index}>
                  <div className='task-list'>
                    <ListItem>
                      <ListItemText primary={task} />
                    </ListItem>
                    <Divider />
                  </div>
                  <div className='d-flex'>
                    <div>
                      <Button variant="contained" onClick={(e) => {
                        disptach(actionCreators.editTask(index))
                        // const value = userTaskList[index]
                        props.onEdit(index)
                      }}>
                        Edit
                      </Button>
                    </div>
                    <div>
                      <Button variant="outlined" onClick={() => disptach(actionCreators.deleteTask(index))} startIcon={<DeleteIcon />}>
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
