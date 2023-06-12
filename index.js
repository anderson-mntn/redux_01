const redux = require('redux');
const createStore = redux.createStore;

const incrementAction = (value) => { return {type: 'INCREMENT', payload: value || 1 } }
const decrementAction = (value) => { return {type: 'DECREMENT', payload: value || 1 } }

function counterReducer(state = 3, action){

    switch (action.type) {
        case 'INCREMENT': return state + action.payload;
         break;
        case 'DECREMENT' : return state - action.payload;
         break
        default: 
         return state;
    }

}

const store = createStore(counterReducer)
console.log(store.getState())

store.subscribe(()=>{console.log(store.getState())}) // .subscribe() é ativado ao mudar estado

// store.dispatch(incrementAction) // .dispacth() levará a ação(argumento) que será levada para o reducer.  

// --- passando incrementAction com carga/payload ---

store.dispatch(incrementAction())
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(5))
store.dispatch(decrementAction(3))