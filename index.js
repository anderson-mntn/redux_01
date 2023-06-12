const redux = require('redux');
const createStore = redux.createStore;

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

const store = createStore(counterReducer)
console.log(store.getState())

store.subscribe(()=>{console.log(store.getState())}) // .subscribe() é ativado ao mudar estado

store.dispatch(incrementAction) // .dispacth() levará a ação(argumento) que será levada para o reducer.  