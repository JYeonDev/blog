import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [first, setFirst] = useState("남자 코트 추천");
  let [second, setSecond] = useState("여자 향수 추천");
  let [third, setThird] = useState("최신 노래 모음");

  let posts = "강남 고기 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{first}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{second}</h3>
        <p>8월 25일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{third}</h3>
        <p>6월 27일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
