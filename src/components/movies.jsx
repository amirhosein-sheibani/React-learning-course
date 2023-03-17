import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
import { deleteMovie, getMovies } from "../../src/services/fakeMovieService";
import Pagination from "./comon/Pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./comon/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import Table from "./comon/Table";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import SerchBox from "./comon/Movie Form/serchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    searchQuery: "",
    selectedGenre: null,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movieToRemove) => {
    const movies = this.state.movies.filter(
      (movie) => movie._id !== movieToRemove._id
    );
    deleteMovie(movieToRemove._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenresSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSerch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      selectedGenre,
      pageSize,
      currentPage,
      searchQuery,
      sortColumn,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const length = this.state.movies.length;
    const { pageSize, currentPage, sortColumn, genres } = this.state;

    if (length == 0) return <h1>There is no movie</h1>;

    const { totalCount, data } = this.getPageData();

    return (
      <main style={{ margin: 10, padding: 10 }} className="container-fluid p-5">
        <div className="row d-flex m-1">
          <div className="col-2">
            <ListGroup
              items={genres}
              onItemSelect={this.handleGenresSelect}
              selectedItem={this.state.selectedGenre}
            ></ListGroup>
          </div>
          <div className="col">
            <div className="d-flex">
              <h2>there is {totalCount} movies in this site</h2>
              <NavLink to="/movies/new">
                <button
                  style={{ marginLeft: "5rem" }}
                  className="button-newmovies"
                >
                  New Movies
                </button>
              </NavLink>
            </div>
            <SerchBox value={this.state.searchQuery} onChange={this.handleSerch}/>
            <hr />
            <Table
              movies={data}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            ></Table>
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChaneg={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </main>
    );
  }
}

export default Movies;
