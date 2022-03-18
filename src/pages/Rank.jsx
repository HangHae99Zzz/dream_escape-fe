import React from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { actionCreator as rankActions } from "../redux/modules/rank";

import Layout from "./Layout";

const Rank = () => {
  const dispatch = useDispatch();

  const ranks = useSelector((state) => state.rank.ranklist);

  // 초반 3개, 이후 ranks
  const underThreeRanks = ranks.filter((i) => i.rank < 4);
  const overThreeRanks = ranks.filter((i) => i.rank > 3);

  React.useEffect(() => {
    dispatch(rankActions.refRank());
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <table id="title">
            <thead>
              <tr>
                <th>순위</th>
                <th>방이름</th>
                <th>팀원</th>
                <th>총 소요시간</th>
              </tr>
            </thead>
            <tbody>
              {underThreeRanks &&
                underThreeRanks.map((i) => {
                  const imgUrl = `./images/rank_top_${i.rank}.png`;
                  return (
                    <tr
                      key={i.roomId}
                      id="top-three"
                      style={{
                        // position: "relative",
                        height: "100px",
                        borderCollapse: "collapse",
                        background:
                          "linear-gradient(#fff 0 0) padding-box, linear-gradient(to right, #9c20aa, #fb3570) border-box",
                        // padding: "10px",
                        border: "3px solid transparent",
                        borderRadius: "15px",
                      }}
                    >
                      <td colSpan={4}>
                        <img src={imgUrl} style={{ display: "block" }} />
                      </td>
                      <td className="top-three-teamname">{i.teamName}</td>
                      <td>{i.userNum}</td>
                      <td className="top-three-time">{i.time}</td>
                    </tr>
                  );
                })}
              {overThreeRanks &&
                overThreeRanks.map((i) => {
                  return (
                    <tr key={i.roomId} id="under-three">
                      <td className="under-three-rank">{i.rank}</td>
                      <td className="under-three-teamname">{i.teamName}</td>
                      <td>{i.userNum}</td>
                      <td className="under-three-time">{i.time}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Container>
      </Layout>
    </>
  );
};

export default Rank;

const Container = styled.div`
  padding-left: 94px;
  text-align: center;

  #title {
    border-collapse: collapse;
    width: 90%;
  }

  #title td,
  #title th {
    padding: 18px;
  }

  #title th {
    padding-top: 19px;
    padding-bottom: 19px;
    background-color: #5668e8;
    color: white;
  }

  #title th:first-child {
    width: 10%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  #title th:last-child {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  #top-three {
    img {
      height: 76px;
    }

    .top-three-teamname {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      text-align: center;
      letter-spacing: -0.03em;

      color: #000000;
    }
    .top-three-time {
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      letter-spacing: -0.03em;

      color: #5668e8;
    }
  }

  #under-three {
    text-align: center;
    letter-spacing: -0.03em;
    .under-three-rank {
      font-weight: 800;
      font-size: 24px;
      line-height: 29px;

      color: #a6b1ff;
    }
    .under-three-teamname {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;

      color: #222222;
    }
    .under-three-time {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;

      color: #a6b1ff;
    }
  }
`;
