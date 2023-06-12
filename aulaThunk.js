const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;  //npm install redux-thunk
const fetch = require('cross-fetch');  //npm install cross-fetch 

const initiaState = [ {id:0, title: "Default item", completed: false}]

const addItem = (item) =>{ return {type: "ADD_ITEM", payload : item } }// action.type

const loadItemAndAdd = () =>{
    return (dispatch) =>{ // preparando para receber função assincrona
        fetch('https://jsonplaceholder.typicode.com/todos/4').then(res => res.json()).then(json => {
            dispatch(addItem(json))
        })
    }
}

const listReducer = (state = initiaState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': return [...state, action.payload] // manter unica funcionalidade de retornar estado
            break;
    
        default:
            return state;
    }
}

const store = createStore(listReducer, applyMiddleware(thunk)) //passando thunk como middleware

store.subscribe(()=>{ console.log(store.getState())})

store.dispatch(loadItemAndAdd())
store.dispatch(addItem())


/*
Fetch básico

function seejson (){
    fetch('https://jsonplaceholder.typicode.com/todos/4').then(res => res.json()).then(json =>{
        console.log(typeof(json.userId))
    }
)}

seejson()

*/