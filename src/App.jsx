//Import Axios
import axios from "axios";

//Importing Browser Router DOM
import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./Pages/Home.Pages";
import Movie from "./Pages/Movie.pages";
import Plays from "./Pages/Plays.Pages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//Axios Global/Default Settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

//Important Stuff
function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={ HomePage } />
      <MovieHOC path="/movie/:id" exact component={ Movie } />
      <DefaultHOC path="/plays" exact component={ Plays } />
    </>
  );
}

export default App;
