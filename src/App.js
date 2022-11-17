// /* eslint-disable */
// warning 제거

import './App.css';
import { useState } from 'react';

function App() {

  let [title, titleChange] = useState(['남자 코트 추천', '강남 라면 맛집', '리액트 독학']);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleState, setTitleState] = useState(0);
  let [inputValue, setInputValue] = useState('');

  function titleEvent() {
    let titleCopy = [...title];
    titleCopy[0] = '여자 코트 추천';
    titleChange(titleCopy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      {
        title.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(!modal); setTitleState(i) }}>{title[i]}
                <span onClick={(e) => {
                  // 상위 html로 퍼지는 이벤트버블링 막을때 사용
                  e.stopPropagation();
                  let likeCopy = [...like];
                  likeCopy[i] = likeCopy[i] + 1;
                  likeChange(likeCopy);
                }}> 👍</span> {like[i]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        setInputValue(e.target.value);
        console.log(inputValue)
      }} />

      <button>전송</button>

      {
        modal === true
          ? <Modal title={title} titleEvent={titleEvent} titleState={titleState} />
          : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.titleState]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.titleEvent}>글 제목 수정</button>
    </div>
  )
}

export default App;
