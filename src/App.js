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

  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {title[0]}{" "}
          <span
            onClick={() => {
              setHeart(heart + 1);
            }}
          >
            ♥
          </span>{" "}
          {heart}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>8월 25일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>6월 27일 발행</p>
        <hr />
      </div>
      <button
        onClick={() => {
          setTitle(["여자 아이돌 모음", "무한도전 다시보기", "7080 노래추천"]);
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
