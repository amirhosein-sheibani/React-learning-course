import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/comon/NavBar";
import { Route, Routes } from "react-router-dom";
import Coustomers from "./components/comon/Coustomers";
import Rental from "./components/comon/Rental";
import NotFound from "./components/comon/NotFound";
import { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Navigation from "./components/comon/Navigation";
import LoginFormFormik from "./components/Formik and yup/loginFormFormik";
import AdvancedFormik from "./components/Formik and yup/AdvancedFormik";
import Register from "./components/Register/Register";
import AddMovies from "./components/comon/Movie Form/AddMovies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

class App extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <main className="container-fluid m-auto">
        <NavBar></NavBar>
        <Routes>
          <Route path="/movies/:id" element={<AddMovies></AddMovies>}></Route>
          <Route path="/movies/*" element={<AddMovies></AddMovies>}></Route>
          <Route path="/register"  element={<Register></Register>}></Route>
          <Route path="/login" element={<AdvancedFormik></AdvancedFormik>}></Route>
          <Route path="/Movies" element={<Movies></Movies>}></Route>
          <Route path="/" element={<Movies></Movies>}></Route>
          <Route path="/Coustomers" element={<Coustomers></Coustomers>}></Route>
          <Route path="/Rental" element={<Rental></Rental>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </main>
    );
  }
}
export default App;
