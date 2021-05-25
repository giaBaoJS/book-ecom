import React from "react";

const UseHoc = (Component) => {
  return (props) => {
    return (
      <div>
        <Component setVisible={props.setVisible}/>
      </div>
    );
  };
};

export default UseHoc;
