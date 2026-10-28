import React from "react";
import Son from "./Son";
import Doughter from "./Doughter";

const Parent = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor:"black",color:"white"}}>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Son component
        </p>
      </Son>
      <Doughter>
        <p>
          This was written in the Parent component, but displayed as a part of
          the Daughter component
        </p>
      </Doughter>
    </div>
  );
};

export default Parent;
