// /* eslint-disable */
// warning 제거

import './App.css';
import { useState } from 'react';

function App() {

  let [title, titleChange] = useState(['남자 코트 추천', '강남 라면 맛집', '리액트 독학']);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function titleEvent() {
    let titleCopy = [...title];
    titleCopy[0] = '여자 코트 추천';
    titleChange(titleCopy);
  }

  function modalEvent() {
    setModal(modal === true ? false : true)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      {/* <button onClick={titleEvent}>글 제목 수정</button> */}

      {/* <div className='list'>
        <h4> {title[0]} <span onClick={() => {
          likeChange(like + 1)
        }}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={modalEvent}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={modalEvent}>{title[i]} <span onClick={() => {
                let likeCopy = [...like];
                likeCopy[i] = likeCopy[i] + 1;
                likeChange(likeCopy);
              }}>👍</span> {like[i]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal title={title} titleEvent={titleEvent}/> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.titleEvent}>글 제목 수정</button>
    </div>
  )
}

export default App;
