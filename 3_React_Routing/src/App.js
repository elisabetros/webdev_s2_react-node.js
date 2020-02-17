import React, { Component } from 'react';
import './App.css';
import FirstPage from './component/pages/firstPage/FirstPage';
import SecondPage from './component/pages/secondPage/SecondPage';
import ThirdPage from './component/pages/thirdPage/ThirdPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>React Router</h1> 
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}
}

export default App;
