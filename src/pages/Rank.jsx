import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { actionCreator as rankActions } from '../redux/modules/rank';
import { useDispatch, useSelector } from 'react-redux';
import RankList from '../components/RankList';
import Layout from './Layout';

const Rank = () => {
    const dispatch = useDispatch();
    const ranks = useSelector(state => state.rank.ranklist);

    React.useEffect(() => {
        dispatch(rankActions.refRank());
    }, []);

    return (
        <>
            <Layout>
                <RankList list={ranks}></RankList>
            </Layout>
        </>
    );
};

export default Rank;
