import React, { Component, useEffect } from "react";
import { Formik, Form } from "formik";
import CustomInput from "./Custominputs";
import Genre from "./CustomSelect";
import { schema_MovieForm } from "../../Formik and yup/schema";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getGenres } from "../../../services/fakeGenreService";
import {
  getMovie,
  saveMovie,
  deleteMovie,
} from "../../../services/fakeMovieService";

const AddMovies = () => {
  const [data, setData] = useState({
    title: "",
    genreName: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });

  const [genres, setGenre] = useState([]);

  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const genres = getGenres();
    setGenre(genres);

    console.log(id);

    if (id === "new") return;

    const selectMovie = getMovie(id);
    if (!selectMovie) return Navigate("/notFound", { replace: true });

    setData(mapToViewModel(selectMovie));

    console.log(data);
  }, []);

  const mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      genreName: movie.genre.name,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  const onSubmit = async (values, actions) => {
    actions.resetForm();
    saveMovie(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    Navigate("/Movies");
    const selectMovie = getMovie(id);
    deleteMovie(selectMovie._id);
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "20rem" }} className="m-4">
        Movie Form
      </h1>
      <Formik
        initialValues={{
          genreId: data.genreId,
          genreName: data.genreName,
          title: data.title,
          numberInStock: data.numberInStock,
          dailyRentalRate: data.dailyRentalRate,
        }}
        enableReinitialize
        validationSchema={schema_MovieForm}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <CustomInput
              value={props.values.title}
              label="Titel"
              name="title"
            ></CustomInput>
            <Genre label="Genre" name="genreId">
              <option value=""></option>
              {genres.map((genre) => (
                <option key={genre._id} value={genre._id}>
                  {genre.name}
                </option>
              ))}
            </Genre>
            <CustomInput
              value={props.values.numberInStock}
              label="Stock"
              name="numberInStock"
            ></CustomInput>
            <CustomInput
              value={props.values.dailyRentalRate}
              label="Rate"
              name="dailyRentalRate"
            ></CustomInput>
            <button
              disabled={props.isSubmitting || !props.isValid}
              className="button-newmovies"
              style={{ margin: "1rem 30%", padding: "5px 20rem" }}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddMovies;
