import React from 'react';
import './App.css';
import FirstSec from './components/first/FirstSec';
import SecondSec from './components/second/SecondSec';
import ThirdSec from './components/third/ThirdSec';



function App() {
  return (
    <div className="App">
            <FirstSec className="first" />
            <SecondSec className="second"/>
            <ThirdSec />
      
    </div>
  );
}

export default App;
