import React, { Component } from "react";
import _ from "lodash";
import proptypes from "prop-types";
import { paginate } from "../utils/paginate";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChaneg, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 ) return null ;
  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment >
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "pointer", padding: 13, fontSize: 18 }}
              onClick={() => onPageChaneg(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  itemsCount: proptypes.number.isRequired,
  pageSize: proptypes.number.isRequired,
  onPageChaneg: proptypes.func.isRequired,
  currentPage: proptypes.number.isRequired,
};

export default Pagination;
