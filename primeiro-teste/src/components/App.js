import './App.css';
import Evento from './Evento'; 
import Formulario from 'components/Formulario';
  function App() {
  return (
    <div className="App">
      <h1>TESTANDO EVENTOS</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Evento numero="3"/>
      <hr></hr>
      <Formulario/>
    </div>
  );
}

export default App;
