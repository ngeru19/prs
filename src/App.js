import './App.css';
import Header from './components/Header';
import Playground from './components/Playground';
import Rules from './components/Rules';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {

  const [modalActive, setModalActive] = useState('true');

  return (
    <div className="App">
      <Header />
      <Playground />
      <Modal 
      active = {modalActive}
      setActive = {setModalActive}
      />
    </div>
  );
}

export default App;
