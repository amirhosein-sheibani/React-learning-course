import React, { Component } from "react";

const SerchBox = ({value , onChange}) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Serch..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SerchBox;
