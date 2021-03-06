import React, { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Virus = ({ modalData, setVirusInputOne, setVirusInputTwo }) => {
  const { content } = modalData;
  const arr = content?.slice(1, -1).split(", ");

  const q1 = useRef();
  const q2 = useRef();

  return (
    <>
      {!arr ? (
        <></>
      ) : (
        <Wrapper
          onClick={() => {
            document.exitPointerLock();
          }}
        >
          {arr.map((num, i) => {
            if (num === "?1")
              return (
                <Question key={i}>
                  <Input
                    placeholder="?"
                    ref={q1}
                    onChange={(e) => setVirusInputOne(e.target.value)}
                    maxLength="1"
                  ></Input>
                </Question>
              );
            else if (num === "?2")
              return (
                <Question key={i}>
                  <Input
                    placeholder="?"
                    ref={q2}
                    autoFocus
                    onChange={(e) => setVirusInputTwo(e.target.value)}
                    maxLength="1"
                  ></Input>
                </Question>
              );
            else return <Num key={i}>{num}</Num>;
          })}
        </Wrapper>
      )}
    </>
  );
};

export default Virus;
const Wrapper = styled.div`
  width: 358px;

  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Num = styled.div`
  width: 70px;
  height: 50px;

  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  /* identical to box height, or 32px */

  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Question = styled.div`
  width: 70px;
`;

const Input = styled.input`
  background: #eaecff;

  width: 50px;
  height: 50px;

  border-radius: 7px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  text-align: center;

  color: #000;

  outline: none;

  ::placeholder {
    color: #ababab;
  }
`;
