import _, { remove, result } from "lodash";
import { number } from "prop-types";
import Pagination from "../comon/Pagination";

export function paginate(items , pageNumber , pageSize) {
    const startIndex = (pageNumber - 1 ) * pageSize ; 
    return _(items).slice(startIndex).take(pageSize).value();
}
