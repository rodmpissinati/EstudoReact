import { useState } from 'react'
import './App.css'
import Cabecalho from './assets/components/Cabecalo'
import Contador from './assets/components/contador'
import {createStore, combineReducers} from 'redux';
import contadorReducer from './assets/reducers/contadorReducers';
import {Provider} from 'react-redux'


function App() {

  const allRdeucers = combineReducers({counter: contadorReducer})
  const store = createStore(allRdeucers);


  return (

    <div className="App">
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>
    
  )
}

export default App
