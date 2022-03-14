import React from "react";
import styled from "styled-components";

const EndingRankList = ({ list }) => {
  // 여기 좀 복잡해짐. css가 roomId가 같다면 효과주고, 아니면 다른 효과
  //
  return (
    <div>
      {list &&
        list.map((rank) => {
          return (
            <RankList key={rank.roomId}>
              <p>{rank.roomId}</p>
              <p>{rank.teamName}</p>
              <p>{rank.time}</p>
              <p>{rank.userNum}</p>
            </RankList>
          );
        })}
    </div>
  );
};

export default EndingRankList;

const RankList = styled.div`
  background: Red;
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h4 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: -0.03em;
  }
`;
