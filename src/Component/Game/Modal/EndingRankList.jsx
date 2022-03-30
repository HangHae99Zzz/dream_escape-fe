import React from "react";
import styled from "styled-components";
import { SvgUserGroup } from "../../../Asset/Icon/etc/svg_etc";

import { useSelector } from "react-redux";

const EndingRankList = ({ list }) => {
  const { roomInfo } = useSelector(({ room }) => room);

  return (
    <div>
      <RankList>
        <thead>
          <tr className="title">
            <th>순위</th>
            <th>방이름</th>
            <th>총 소요시간</th>
            <th>
              <SvgUserGroup />
            </th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((rank) => {
              //99:99:99면 빈 tr(공간만 차지)
              if (rank.time == "00:00:00" || rank.time == "99:99:99") {
                return <tr key={rank.roomId} style={{ height: "20px" }}></tr>;
                // 여기 안에서 if문 한번 더 써서 내 방 넘버랑 같으면 className 붙여주기
              } else if (rank.roomId === roomInfo.roomId) {
                return (
                  <tr key={rank.roomId} className="myScore">
                    <td>{rank.rank}</td>
                    <td>{rank.teamName}</td>
                    <td style={{ color: "#5668E8" }}>{rank.time}</td>
                    <td>{rank.userNum}</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={rank.roomId}>
                    <td>{rank.rank}</td>
                    <td>{rank.teamName}</td>
                    <td>{rank.time}</td>
                    <td>{rank.userNum}</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </RankList>
    </div>
  );
};

export default EndingRankList;

const RankList = styled.table`
  width: 350px;
  height: 160px;

  .title th {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #000000;
  }

  tr:nth-child(even) {
    font-size: 20px;
    line-height: 24px;

    color: #a5a5a5;

    td {
      font-weight: 600;
    }
  }

  tr:nth-child(odd) {
    font-size: 14px;
    line-height: 17px;

    color: #a5a5a5;

    opacity: 0.7;

    td {
      font-weight: 600;
      padding: 10px 0;
    }
  }

  tr.myScore {
    font-size: 24px;
    line-height: 29px;

    color: #000000;

    opacity: 1;

    td {
      font-weight: bold;
    }
  }
`;
