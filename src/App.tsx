import './style/style.css';
import { useEffect } from 'react';

import { Button, Modal } from './ui-library';
import { PostsMaterial } from './components';
import { sagaActions } from './store/saga/saga';
import { useDispatch } from 'react-redux';
import { postAction } from './store/reducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaActions.getPosts());
  })

  const createPost = () => {
    dispatch({})
  }

  return (
    <div className="App">
      <div className="header__block">
       <Button 
        mode={'button-primary'} 
        children={'Create post'} 
        onClick={createPost} />
      </div>
      <div className="app__body">
        <PostsMaterial />
      </div>
      <Modal />
    </div>
  );
}

export default App;
