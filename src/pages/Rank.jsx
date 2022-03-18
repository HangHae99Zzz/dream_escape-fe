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
                  return (
                    <tr key={i.roomId} id="top-three">
                      <td>{i.rank}</td>
                      <td>{i.teamName}</td>
                      <td>{i.userNum}</td>
                      <td>{i.time}</td>
                    </tr>
                  );
                })}
              {overThreeRanks &&
                overThreeRanks.map((i) => {
                  return (
                    <tr key={i.roomId} id="under-three">
                      <td>{i.rank}</td>
                      <td>{i.teamName}</td>
                      <td>{i.userNum}</td>
                      <td>{i.time}</td>
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

  /* #title tbody #top-three {
    height: 100px;
    border: 1px solid red;
  } */
`;
