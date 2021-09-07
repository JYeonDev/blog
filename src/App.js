/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 향수 추천",
    "최신 노래 모음",
  ]);
  let [heart, setHeart] = useState(0);

  let [modal, modalChange] = useState(false);

  let [clickTitle, setClickTitle] = useState(0);

  let [value, setValue] = useState("");

  return (
    <div className="App">
      {title.map((i, n) => {
        return (
          <div className="list" key={n}>
            <h3
              onClick={() => {
                setClickTitle(n);
              }}
            >
              {i}
              <span
                onClick={() => {
                  setHeart(heart + 1);
                }}
              >
                ♥
              </span>{" "}
              {heart}
            </h3>
            <p>8월 25일 발행</p>
            <hr />
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          modalChange(!modal);
        }}
      >
        열고닫기
      </button>
      {modal === true ? <Modal title={title} clickTitle={clickTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.clickTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
