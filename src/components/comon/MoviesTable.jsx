import React, { Component } from "react";
import TableBody from "./TableBody";
import TableHeaders from "./TableHeaders";

const MoviesTable = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeaders
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeaders>

      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default MoviesTable;
