import React, { useRef } from "react";
import styled from "styled-components";

const Virus = ({ modalData }) => {
  const { content } = modalData;
  const arr = content.slice(1, -1).split(", ");

  const inputRef = useRef();

  return (
    <Wrapper>
      {arr.map((num, i) => {
        if (num === "?") {
          return (
            <Question>
              <Input placeholder="?" id={i} autoFocus></Input>
            </Question>
          );
        } else {
          return <Num>{num}</Num>;
        }
      })}
    </Wrapper>
  );
};

export default Virus;
const Wrapper = styled.div`
  width: 358px;
  height: 265px;

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

  letter-spacing: -0.03em;

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
  letter-spacing: -0.03em;

  color: #ababab;
`;
