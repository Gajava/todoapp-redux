  const TodoReducer=(state ={Todo: []},action) =>{
    switch(action.type){
        case "ADD_TODO":
            return {Todo:[...state.Todo,action.payload]};

        case "REMOVE_TODO":
            return {Todo:[...state.Todo.filter( i => i!==action.payload)]};
            default:
                return state;
   
    }
}
export default TodoReducer;