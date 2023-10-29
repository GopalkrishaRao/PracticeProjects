const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    users: [], // Changed 'user' to 'users' to be consistent with action payload
    error: ''
};

// action types
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    };
};

const fetchUsersSuccess = (users) => { // Fixed parameter name here
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users // Fixed payload assignment here
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error // Fixed payload assignment here
    };
};

// reducer
const reducer = (state = initialState, action) => { // Fixed typo 'aciton' to 'action'
    switch (action.type) { // Fixed typo 'aciton' to 'action'
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload, // Fixed typo 'aciton' to 'action'
                error: ''
            };
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload // Fixed typo 'aciton' to 'action'
            };
        default:
            return state;
    }
};

// async action creator
const fetchUsers = () => {
    return function(dispatch) {
        // fetch user request, make loading true
        dispatch(fetchUsersRequest());
        
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // response.data is the array of users
                const users = response.data.map((user)=>user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error message
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// subscribe to store
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchUsers()); // Dispatch the fetchUsers action
