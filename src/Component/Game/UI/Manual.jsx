import React from "react";
import styled from "styled-components";
import { SvgW, SvgA, SvgS, SvgD } from "../../../Asset/Icon/game/svg_game";

const manual = () => {
  return (
    <>
      <ManulWrapper>
        <Keyboard>
          <p>W</p>
          <Direction>
            <SvgW />
          </Direction>
        </Keyboard>
        <Keyboard>
          <p>A</p>
          <Direction>
            <SvgA />
          </Direction>
        </Keyboard>
        <Keyboard>
          <p>S</p>
          <Direction>
            <SvgS />
          </Direction>
        </Keyboard>
        <Keyboard>
          <p>D</p>
          <Direction>
            <SvgD />
          </Direction>
        </Keyboard>
        <Text>
          <p>: 이동</p>
        </Text>
      </ManulWrapper>
      <ManulWrapper
        style={{
          marginTop: "10px",
        }}
      >
        <ESCkeyboard>
          <p>ESC</p>
        </ESCkeyboard>
        <Text>
          <p>: 커서 표시</p>
        </Text>
      </ManulWrapper>
    </>
  );
};

export default manual;
const ManulWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Keyboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 37px;
  height: 37px;

  opacity: 0.7;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;

  margin-right: 4px;

  p {
    margin-left: 5px;
    margin-top: 3px;

    font-weight: 900;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */

    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: #ffffff;
  }
`;

const Direction = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 4px;
  margin-bottom: 4px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;

  opacity: 0.7;

  margin-left: 6px;
`;

const ESCkeyboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 41px;
  height: 27px;

  opacity: 0.7;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;

  margin-right: 4px;

  p {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: -0.03em;
    text-transform: uppercase;

    color: #ffffff;
  }
`;
