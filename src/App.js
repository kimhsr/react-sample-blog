// /* eslint-disable */
// warning 제거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 라면 맛집';
  let [title, titleChange] = useState(['남자 코트 추천', '강남 라면 맛집', '리액트 독학']);
  let [like, likeChange] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <div className='list'>
        <h4> { title[0] } <span onClick={ ()=>{likeChange(like + 1) } }>👍</span> { like } </h4>
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

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
