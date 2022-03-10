import React, { useEffect, useRef } from "react";
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as escapeActions } from "../redux/modules/escape";

function Modal({ setOpenModal, quizType }) {
  console.log(quizType, typeof quizType);
  const inputRef = useRef("");
  const dispatch = useDispatch();
  const question = useSelector((state) => state.escape.question);
  const content = useSelector((state) => state.escape.content);
  const answer = useSelector((state) => state.escape.answer);

  useEffect(() => {
    dispatch(escapeActions.refQuiz(quizType));
  }, []);

  const handleAnswer = () => {
    console.log(
      inputRef.current.value,
      answer,
      typeof inputRef.current.value,
      typeof answer
    );
    if (inputRef.current.value === answer) {
      console.log("정답입니다!");
    } else {
      console.log("오답입니다!");
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          {question ? <h1>{question}</h1> : <h1>오류</h1>}
        </div>
        <div className="body">{content ? <p>{content}</p> : <p>오류</p>}</div>
        <div className="body">
          <p>힌트 : 스타워즈 포스터를 눈여겨보자</p>
        </div>
        <div>
          <label>
            <input ref={inputRef} type="text" placeholder="정답을 입력하세요" />
          </label>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              취소
            </button>
            <button type="submit" onClick={handleAnswer}>
              제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
