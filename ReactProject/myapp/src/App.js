import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const startSpeech = () => {
    // 这里的代码在web端无法使用
    // 必须打包/真机调试时才能生效
    window.plus && window.plus.speech.startRecognize({
      engine: 'iFly',
      lang: 'zh-cantonese',
      nbest: 3,
    }, (result) => {
      console.log('result=', result);
      // search.value = result;
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={startSpeech}>语音</button>
      </header>
    </div>
  );
}

export default App;
