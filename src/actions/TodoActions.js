

export const AddTodoAction =(todo)=>{
   // get the todos array from the state
  // let hasTodo = ''
  //  todos && todos.find((t) => t.todo === todo); // add a check for undefined or null
  return(dispatch)=>{
    
    dispatch({

      type: "ADD_TODO" ,

      payload: todo

    });

  } 
};
export const RemoveTodoAction = (todo) => {
    return(dispatch)=>{
      dispatch({
        type: "REMOVE_TODO",
        payload:todo
        });
    }
    
    
    };
