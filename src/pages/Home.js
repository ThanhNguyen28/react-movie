import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Contents/index";
import Intro from "../components/Intro/Intro";
import Menus from "../components/Menus/index";
import MovieDetailsPage from "./MovieDetails/index";

function Home(props) {
  const { MovieDetails } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);

  useEffect(() => {
    setIsShowMovieDetails(MovieDetails ? true : false);
  }, [MovieDetails]);

  return (
    <div>
      <Intro />
      <Contents />
      <MovieDetailsPage showModal={isShowMovieDetails} movie={MovieDetails} />
      <Menus />
    </div>
  );
}

export default Home;
