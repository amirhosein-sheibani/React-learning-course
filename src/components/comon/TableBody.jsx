import React, { Component } from "react";
import _ from "lodash";
import { NavLink, Link } from "react-router-dom";
import Movies from "../movies";
import { getMovies } from "../../services/fakeMovieService";

class TableBody extends Component {
  
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  changeItem = (item , columns) =>{
    <NavLink to={`/movies/${item._id}`}></NavLink>

  }

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr className="mt-auto" key={item._id}>
            {columns.map((column) => (
              <td className="pt-4" key={this.createKey(item, column)}>
                <h5 onItemSelect={this.changeItem}>{this.renderCell(item, column)}</h5>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
