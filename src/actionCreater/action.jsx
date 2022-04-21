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


export const deleteTask = (index) => {
    return (dispatch) => {
      dispatch({
        type: "DELETE",
        payload: index,
      });
    };
  };


  export const updateTask = (index,task) => {
    return (dispatch) => {
      dispatch({
        type: "UPDATE",
        payload: {index:index,task:task,}

      });
    };
  };
