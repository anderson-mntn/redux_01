const redux = require('redux');
const createStore = redux.configureStore;

const incrementAction = {type: 'INCREMENT'}
const decrementAction = {type: 'DECREMENT'}

function counterReducer(state = 3, action){

    switch (action.type) {
        case 'INCREMENT': return state + 1;
         break;
        case 'DECREMENT' : return state - 1;
         break
        default: 
         return state;
    }

}