const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers
const { incrementAction, decrementAction} = require('./actions/counterActions')
const { addItemAction } = require('./actions/listActions')

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


//store.subscribe(()=>{console.log(store.getState())}) // .subscribe() é ativado ao mudar estado


// store.dispatch(incrementAction) // .dispacth() levará a ação(argumento) que será levada para o reducer.  

// --- passando incrementAction com carga/payload ---
// --------------
// Aula aprendendo a usar mais de um reducer com uma lista



const listReducer = (state = ["default item"], action) => {
    switch (action.type) {
        case 'ADD_ITEM': return [...state, action.payload] 
        default: return state;
    }
}
// --------------

const allReducers = combineReducer({
    counter: counterReducer, 
    list: listReducer
})
const store = createStore(allReducers)
console.log(store.getState())

store.subscribe(()=>{console.log(store.getState())}) // .subscribe() é ativado ao mudar estado

store.dispatch(incrementAction())
store.dispatch(addItemAction("First added item")) //o dispatch será feito para todos os itens, e verificar se type coincindir será retornado o quer estiver descrito nele.
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(5))
store.dispatch(decrementAction(3))