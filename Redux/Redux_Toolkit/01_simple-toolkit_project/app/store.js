const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer=require('../features/cake/cakeSlice');
const iceCreamReducer=require('../features/icecream/icecreamSlice');

// for async
const userReducer=require('../features/user/userSlice')

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer,
    },
})

module.exports=store;