import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actionCreator as rankActions } from '../redux/modules/rank';

import { DefaultLayout } from '../Layout';
import { SvgRanking } from '../Asset/Icon/sidebar/svg_sidebar';

const Rank = () => {
    const dispatch = useDispatch();
    const ranks = useSelector(state => state.rank.ranklist);

    // 초반 3개, 이후 ranks
    const topThreeRanks = ranks?.filter(i => i.rank < 4);
    const underThreeRanks = ranks?.filter(i => i.rank > 3);

    React.useEffect(() => {
        dispatch(rankActions.refRank());
    }, []);

    return (
        <>
            <DefaultLayout>
                {!topThreeRanks ? (
                    <ContainerNone>
                        <TitleNone>
                            <h4>랭킹조회</h4>
                            <SvgRanking />
                        </TitleNone>
                        <ContentsNone>
                            <p>아직 랭킹이 없습니다.</p>
                        </ContentsNone>
                    </ContainerNone>
                ) : (
                    <Container>
                        <Title>
                            {/* <h4>랭킹조회</h4> */}
                            {/* <SvgRanking /> */}
                        </Title>
                        <Header>
                            <div className="first">순위</div>
                            <div className="second">방이름(인원수)</div>
                            <div className="third">총 소요 시간</div>
                        </Header>
                        <Body>
                            {topThreeRanks &&
                                topThreeRanks.map(i => {
                                    const imgUrl = `image/rank_top_${i.rank}.png`;
                                    return (
                                        <TopThree key={i.roomId} id="top-three">
                                            <div className="first">
                                                <img src={imgUrl} />
                                            </div>
                                            <TeamName className="second">
                                                <div className="top-three-teamname teamname">
                                                    {i.teamName}
                                                </div>
                                                <UserNum>{i.userNum}</UserNum>
                                            </TeamName>
                                            <div className="third top-three-time">
                                                {i.time}
                                            </div>
                                        </TopThree>
                                    );
                                })}
                            {underThreeRanks &&
                                underThreeRanks.map(i => {
                                    return (
                                        <UnderThree
                                            key={i.roomId}
                                            id="under-three"
                                        >
                                            <div className="first under-three-rank">
                                                {i.rank}
                                            </div>
                                            <TeamName className="second">
                                                <div className="under-three-teamname teamname">
                                                    {i.teamName}
                                                </div>
                                                <UserNum
                                                    style={{
                                                        background: '#FFC3F2',
                                                    }}
                                                >
                                                    {i.userNum}
                                                </UserNum>
                                            </TeamName>
                                            <div className="third under-three-time">
                                                {i.time}
                                            </div>
                                        </UnderThree>
                                    );
                                })}
                        </Body>
                    </Container>
                )}
            </DefaultLayout>
        </>
    );
};

export default Rank;

const Container = styled.div`
    width: 80%;
    padding-left: 94px;

    .first {
        flex: 20%;
        padding-left: 53px;
    }

    .second {
        flex: 60%;
    }

    .third {
        flex: 20%;
    }

    .teamname {
        padding-right: 24px;
    }

    #rank-button {
        position: fixed;
        width: 121px;
        height: 40px;
        left: 723px;
        bottom: 24px;

        background: #ffffff;
        box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.15);
        border-radius: 38px;

        font-weight: 800;
        font-size: 20px;
        line-height: 24px;

        color: #5668e8;
    }
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 32px;

    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        padding-right: 16px;
    }
`;
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    height: 54px;

    background: #5668e8;
    border-radius: 30px;
    div {
        font-weight: 500;
    }
    .third {
        flex: 10%;
    }
`;

const Body = styled.div``;

const TopThree = styled.div`
    display: flex;
    align-items: center;

    border: 2px solid transparent;
    border-radius: 27px;
    background-image: linear-gradient(#fff, #fff),
        linear-gradient(to right, #5668e8, #56e8c5, #f242cb);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin: 8px 0;

    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    height: 90px;

    .top-three-teamname {
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */
        font-weight: 500;
        text-align: center;

        color: #000000;
    }
    .top-three-time {
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        text-align: center;

        color: #5668e8;
    }
`;

const TeamName = styled.div`
    display: flex;
`;

const UserNum = styled.div`
    width: 26px;
    height: 26px;

    color: #fff;

    background: #ff5bdd;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const UnderThree = styled.div`
    height: 70px;
    margin: 12px 0;
    display: flex;
    align-items: center;

    .under-three-rank {
        padding-left: 83px;

        font-weight: 800;
        font-size: 24px;
        line-height: 29px;

        color: #a6b1ff;
    }

    .under-three-teamname {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;

        color: #404040;
    }

    .under-three-time {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */

        text-align: center;

        color: #a6b1ff;
    }
`;
const ContainerNone = styled.div`
    padding-left: 94px;
`;

const TitleNone = styled.div`
    display: flex;
    padding-bottom: 32px;

    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        padding-right: 16px;
    }
`;
const ContentsNone = styled.div`
    width: 90%;
    height: 14.844vw;
    background: #f1f3ff;
    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-weight: 300;
        font-size: 22px;
        line-height: 43px;
        color: #c6c6c6;
    }
`;
