import { useState } from 'react';
import './App.css';
import NovoAtendimento from './Components/FaleConosco/NovoAtendimento';
import VerificarAndamento from './Components/FaleConosco/VerificarAndamento';
import HeaderSac from './Components/FaleConosco/HeaderSac';

function App() {

  const [ControleAtendimento, setControleAtendimento] = useState('none')
  const [ControleVerificar, setControleVerificar] = useState('none')
  const [ControleBotoes, setControleBotoes] = useState('fcolumn')

  return (
    <div className="App">


      <section>
        <HeaderSac />
      </section>

      <div className='sub-header-sac'>
        <img src="https://imgur.com/6OKArHf.gif" alt="" />
      </div>

      <div className='description'>
        <h1>A SUA SATISFAÇÃO É MUITO IMPORTANTE PARA NÓS</h1>
        <h3>ENTRE EM CONTATO CONOSCO ATRAVÉS DO FORMULÁRIO ABAIXO</h3>
        <p>NOSSA EQUIPE TE RESPONDERÁ O QUANTO ANTES</p>
      </div>


      <section className='fale-conosco'>
        <div className={ControleBotoes}>
          <h1>Fale Conosco</h1>
          <button onClick={() => { setControleAtendimento('flex'); setControleBotoes('none') }}>Novo Atendimento</button>
          <button onClick={() => { setControleVerificar('flex'); setControleBotoes('none') }}>Acompanhar Atendimento</button>
        </div>

        <div className={ControleAtendimento} >
          <NovoAtendimento />
          <button onClick={() => { setControleAtendimento('none'); setControleBotoes('fcolumn') }}>Voltar</button>
        </div>
        <div className={ControleVerificar}>
          <VerificarAndamento />
          <button onClick={() => { setControleVerificar('none'); setControleBotoes('fcolumn') }}>Voltar</button>
        </div>
      </section >
    </div>

  );
}

export default App;
