const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers

const { incrementAction, decrementAction } = require('./actions/CounterActions')
const { addItemAction } = require('./actions/ListActions')

const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')

//store.subscribe(()=>{console.log(store.getState())}) // .subscribe() é ativado ao mudar estado

// store.dispatch(incrementAction) // .dispacth() levará a ação(argumento) que será levada para o reducer.  

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
store.dispatch(incrementAction(6))
store.dispatch(decrementAction(3))