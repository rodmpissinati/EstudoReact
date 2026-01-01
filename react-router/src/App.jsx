import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Contatos from './components/Contatos'
import Video from './components/Video'
import PrivateRoute from './privareRoute'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <div>

          <Nav />

       <Switch>   {/*serve para assim que achar o caminho já levar para page */}
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/contato/:id'>
            <Contatos />
          </Route>

          <Route path='/contato'>
            <Contato />
          </Route>

          <Route path = '/video'>
              <Video />
          </Route>

           <Route path='*'> {/*Serve para tratar as rotas que não existem, qualquer rota que não seja igual as de  */}
             <p> Essa Rota não Existe</p> {/* cima caem aqui, mas é necessário daixa-lo sempre no final */}
          </Route>

        </Switch>
      </div>
    </Router>
  ) 
}

export default App
