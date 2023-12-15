import React from "react";

import Countdown from "react-countdown";

const Completionist = () => <span> You are good to go!</span>;



const counterStyles = {
  content: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "2.5rem",
    color: "green",
    // backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
  },
};





const Counter = () => {
  return (
    <span style={counterStyles.content}>
      <Countdown date={Date.now() + 642592000}>
        <Completionist />
        
      </Countdown>
    </span>
  );
};

export default Counter;
