import React, { useState } from "react";
import styled from "styled-components";

import { RoomList } from "./index";

const Contents = () => {
  const [page, setPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);

  const pagination = (page) => {
    setPage(page + 1);
  };

  return (
    <>
      <FlexContainer>
        <RoomListContainer>
          <RoomListHeader>
            <Sub>게임방리스트</Sub>
            <ToggleContainer>
              <UnChecked
                onClick={() => {
                  !isFiltered ? setIsFiltered(true) : setIsFiltered(false);
                }}
              >
                <input
                  id="check"
                  type={"Checkbox"}
                  onChange={() => {}}
                  checked={isFiltered}
                />
                <Checked></Checked>
              </UnChecked>
              입장 가능
            </ToggleContainer>
          </RoomListHeader>
          <RoomList page={page} isFiltered={isFiltered}></RoomList>
        </RoomListContainer>
      </FlexContainer>
      <MoreBtn onClick={() => pagination(page)}>
        <span>더보기</span>
      </MoreBtn>
    </>
  );
};

const FlexContainer = styled.div`
  width: 83.7%;
  height: 100%;
  margin-top: 416px;
`;

const RoomListContainer = styled.div`
  width: 100%;
`;

const RoomListHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 14px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  height: 80px;
  align-items: center;
`;

const Sub = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #394ddb;
`;

const ToggleContainer = styled.div`
  width: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  color: #394ddb;
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + div {
    background: #5668e8;
  }

  input[type="checkbox"] + span {
    margin-right: 4px;
  }
`;

const UnChecked = styled.div`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #ffffff left top no-repeat;
  box-shadow: inset 0px 0px 6px #a6b1ff;
  border-radius: 100px;
`;

const Checked = styled.div`
  position: absolute;
  width: 12px;
  left: 5px;
  top: 5px;
  height: 12px;
  background: white left top no-repea;
  /* border: 17px solid #ccc0; */
  border-radius: 100px;
  cursor: pointer;
  /* box-sizing: content-box; */
`;

const MoreBtn = styled.button`
  position: relative;
  width: 121px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.15);
  border-radius: 38px;
  margin: 32px;

  font-size: 20px;
  color: #5668e8;
  cursor: pointer;

  background-image: url("image/emptyDownArrow.svg");
  background-repeat: no-repeat;
  background-position-x: 82px;
  background-position-y: 15px;
  span {
    position: absolute;
    left: 22px;
    top: 10px;
  }
`;

export default Contents;
