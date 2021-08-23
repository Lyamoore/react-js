import React, { useState } from "react";

export const MessageList = () => {
  const [list] = useState([3, 3, 4]);

  return (
    <>
      {list.map((element, index) => {
        return <React.Fragment key={index}>{element}</React.Fragment>;
      })}
    </>
  );
};
