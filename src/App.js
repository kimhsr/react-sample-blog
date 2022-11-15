import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 라면 맛집';
  let [title, b] = useState(['남자 코트 추천', '강남 라면 맛집', '리액트 독학']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className='list'>
        <h4>{ title[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
