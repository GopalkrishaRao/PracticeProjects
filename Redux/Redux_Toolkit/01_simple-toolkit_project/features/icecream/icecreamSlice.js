const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState={
    numOfIceCream:20,
}

const iceCreamSlice= createSlice({
    name: 'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream--
        },
        restocked:(state, action)=>{
            state.numOfIceCream+=action.payload
        },
    },
    // it decrement the icream count when when cake is ordered assuming that with a cake icecream is freely offered
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered, state=>{
            state.numOfIceCream--
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions=iceCreamSlice.actions;