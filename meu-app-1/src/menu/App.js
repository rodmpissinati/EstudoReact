import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Header name="Exemplo" links={["Sobre", "Ver", "Comprar","Minhas Compras"]}></Header>
  );
}

export default App;
