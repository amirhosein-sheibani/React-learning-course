import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, valuePropery, textProperty, onItemSelect, selectedItem } =
    props;
  return (
    <React.Fragment>
      <ul className="list-group text-center">
        {items.map((item) => (
          <li
            style={{ cursor: "pointer" }}
            className={
              item === selectedItem
                ? "list-group-item active "
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
            key={item[valuePropery]}
          >
            <a>{item[textProperty]}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ListGroup.defaultProps = {
  valueProperty: "id",
  textProperty: "name",
};

export default ListGroup;
