export const addTodo = (todoText)=>{
    return {
        type:'ADD',
        payload: todoText
    }
};

export const deleteTodo = (id)=>{
    return {
        type:'DELETE',
        payload:id
    }
}