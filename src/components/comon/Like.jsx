import React, { Component } from "react";


const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <React.Fragment>
      <i
        style={{
          fontSize: 30,
          paddingTop: 13,
          color: "red",
          cursor: "pointer",
          paddingLeft:15
        }}
        key={props.key}
        aira-hidden="true"
        className={classes}
        onClick={props.onClick}
      ></i>
    </React.Fragment>
  );
};
export default Like;
