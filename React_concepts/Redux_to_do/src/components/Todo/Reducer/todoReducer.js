let initialState=[];
 const todoActions=(state=initialState, action)=>{
    switch (action.type) {
        case "ADD":
            return ([ 
                    {id:Date.now(), text:action.payload}, ...state
                    ]);
        case "DELETE":
            return (state.filter(item=>item.id!==action.payload));
        default:
            return ([...state])
    }
    
};

export default todoActions;