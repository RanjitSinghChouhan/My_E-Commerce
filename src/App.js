import React from 'react'
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <MainBody />
      </div>
    </Provider>
  );
}

export default App;
