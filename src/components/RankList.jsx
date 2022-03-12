import React from "react";

const RankList = ({ list }) => {
  return (
    <div>
      {list &&
        list.map((rank) => {
          return (
            <div key={rank.roomId}>
              <p>{rank.teamName}</p>
              <p>{rank.time}</p>
              <p>{rank.userNum}</p>
              <p>{rank.comment}</p>
            </div>
          );
        })}
    </div>
  );
};

export default RankList;
