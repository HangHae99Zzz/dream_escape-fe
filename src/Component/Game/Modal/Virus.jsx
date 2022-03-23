import React from "react";
import styled from "styled-components";

const Virus = ({ modalData }) => {
  const { content } = modalData;
  console.log(typeof content);

  // string 에서 [ ] 을 제거하고 어레이에 넣는다
  const arr = content.slice(1, -1).split(",");
  const rendering = () => {
    const result = [];
    const col_1 = [];
    const col_2 = [];
    const col_3 = [];
    const col_4 = [];
    const col_5 = [];
    const col_6 = [];

    for (let i = 0; i < arr.length; i++) {
      if (i <= 4) {
        col_1.push(<span key={i}>{arr[i]}</span>);
      } else if (i > 4 && i <= 9) {
        col_2.push(<span key={i}>{arr[i]}</span>);
      } else if (i > 9 && i <= 14) {
        col_3.push(<span key={i}>{arr[i]}</span>);
      } else if (i > 14 && i <= 19) {
        col_4.push(<span key={i}>{arr[i]}</span>);
      } else if (i > 19 && i <= 24) {
        col_5.push(<span key={i}>{arr[i]}</span>);
      } else if (i > 24 && i <= 29) {
        col_6.push(<span key={i}>{arr[i]}</span>);
      }
    }
    console.log(col_1, col_2);

    for (let i = 1; i < 7; i++) {
      result.push(<div>{eval("col_" + i)}</div>);
    }
    console.log(result);

    return result;
  };

  return <Wrapper>{rendering()}</Wrapper>;
};

export default Virus;
const Wrapper = styled.div`
  width: 358px;
  height: 265px;
`;
