import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Cabecalho from './components/cabecalho';
// import Rodape from './components/rodape';
// import { Button, Icon, ButtonToolbar } from 'rsuite';
 import 'rsuite/dist/styles/rsuite-default.css'
// import Array from './components/Array';
// import Objeto from './components/Objeto';
import Carros from './components/Carros';

function App() {
  return (
      // <div>
      //   <Cabecalho titulo='Cadastro de Alunos' color='red' />
      //   <p>
      //     Vamos estudar o react native
      //   </p>
      //   <Array />

      //   <ButtonToolbar>
      //     <Button color='green' ><Icon icon='save' /> Salvar</Button>
      //     <Button color='yellow' ><Icon icon='refresh' /> Limpar</Button>
      //     <Button color='red' ><Icon icon='hand-o-left' /> Voltar</Button>
      //   </ButtonToolbar>

      //   <Objeto/>

      //   <Rodape/>
      // </div>  
      
      <Carros />
  );
}

export default App;
