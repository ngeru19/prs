import './App.css';
import Header from './components/Header';
import Playground from './components/Playground';
import Rules from './components/Rules';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <Header />
      <Playground />
      <Modal active = {modalActive} setActive = {setModalActive}>
        <Rules setActive = {setModalActive} />
      </Modal>
      <div className='rules-btn'>
        <button className="rules__button" onClick={()=> setModalActive(true)}>Rules</button>
      </div>
      
    </div>
  );
}

export default App;
