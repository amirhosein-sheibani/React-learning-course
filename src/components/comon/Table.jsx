import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Like from "./Like";
import MoviesTable from "./MoviesTable";

class Table extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <NavLink
          className="text-black text-decoration-none"
          to={`/movies/${movie._id}`}
        >
          {movie.title}
        </NavLink>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          key={movie._id}
          liked={movie.liked}
          onClick={() => this.props.onLike(movie)}
        ></Like>
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          key={movie._id}
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger m-2 px-4 py-3"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <MoviesTable
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={this.columns}
      ></MoviesTable>
    );
  }
}

export default Table;
