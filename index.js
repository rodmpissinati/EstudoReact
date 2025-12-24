const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers

 // Definindo uma ação

const {incrementAction, decrementAction} = require('./actions/CounterActions');
const {addItemAction} = require('./actions/ListActions')


 // Reducer, pega a ação e define o que tem que ser feito

 const counterReducer = require('./reducers/CounterReducers')




 // Outro reducer

const listReducer = require('./reducers/ListReducers')



 

 const allReducers = combineReducers({
    counter: counterReducer,
    list: listReducer
    // Caso queira mais um reducer apenas adicionar aqui 
 })

 const store = createStore(allReducers);

 store.subscribe(()=> {console.log(store.getState())}) // e se quiser imprimir apenas um colocar store.getState + . + nome do reducer ex store.getState.counter

 store.dispatch(incrementAction());
 store.dispatch(decrementAction());
 store.dispatch(incrementAction(5));
 store.dispatch(decrementAction(2));

 store.dispatch(addItemAction('Novo Item'))