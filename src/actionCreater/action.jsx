export const addTask = (task) => {
    return (dispatch) => {
      dispatch({
        type: "ADD",
        payload: task,
      });
    };
  };

  
  export const editTask = (index) => {
    return (dispatch) => {
      dispatch({
        type: "EDIT",
        payload: index,
      });
    };
  };


export const deleteTask = (task) => {
    return (dispatch) => {
      dispatch({
        type: "DELETE",
        payload: task,
      });
    };
  };


  export const updateTask = (task) => {
    return (dispatch) => {
      dispatch({
        type: "UPDATE",
        payload: task,
      });
    };
  };
