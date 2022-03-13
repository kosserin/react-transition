import React, {useState} from 'react';
// import reactDom from 'react-dom';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {

  const [isModalShown, setIsModalShown] = useState(false);

  const closeModalHandler = () => {
    setIsModalShown(false);
  }

  const showModalHandler = () => {
    setIsModalShown(true);
  }

  return (
    <React.Fragment>
      {isModalShown && <Backdrop onCloseModal={closeModalHandler} />}
      <Modal show={isModalShown} onCloseModal={closeModalHandler} />
      <button onClick={showModalHandler}>Show modal</button>
    </React.Fragment>
  );
}

export default App;
