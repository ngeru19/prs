import './App.css';
import Header from './components/Header/Header';
import Playground from './components/Playground/Playground';
import Rules from './components/Rules/Rules';
import Modal from './components/Modal/Modal';
import { useState, useRef } from 'react';

function App() {

  /* States */

  const [modalActive, setModalActive] = useState(false);
  const [gameScore, setGameScore] = useState(10);

  /* Click handler*/

  const handleClick = () => setModalActive(true)

  return (
    <div className="App">

      <Header gameScore={gameScore}/>

      <Playground setGameScore={setGameScore}/>

      <Modal active = {modalActive} setActive = {setModalActive}>
        <Rules setActive = {setModalActive} />
      </Modal>
      
      <div className='rules-btn'>
        <button className="rules__button" onClick={handleClick}>Rules</button>
      </div>
      
    </div>
  );
}

export default App;
