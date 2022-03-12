import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { actionCreator as rankActions } from "../redux/modules/rank";
import { useDispatch, useSelector } from "react-redux";
import RankList from "../components/RankList";

const Rank = () => {
  const dispatch = useDispatch();
  const ranks = useSelector((state) => state.rank.ranklist);

  React.useEffect(() => {
    dispatch(rankActions.refRank());
  }, []);

  return <RankList list={ranks}></RankList>;
};

export default Rank;
