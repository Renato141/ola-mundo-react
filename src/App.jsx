import React from 'react';
import img1 from './assets/img1.jpg';
import './App.css'; 

function App() {
  const mensagemBemVindo = () => {
    alert('Seja Bem-Vindo!');
  };

  return (
    <div className="container">
      <img src={img1} alt="" className="imagem" />
      <h1>Renato Nascimento de Oliveira</h1>
      <p>Cursando Bacharelado em Sistemas de Informação</p>
      <button onClick={mensagemBemVindo}>Clique aqui</button>
    </div>
  );
}

export default App;
