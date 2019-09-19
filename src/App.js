import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Home from './Containers/Home/Home';
import store from './Store'
import ButtonAppBar from './Components/Navbar/navbar'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ButtonAppBar />
        <Home />
      </Provider>

    </div>
     
  );
}

export default App;
