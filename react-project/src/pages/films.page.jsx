import { useState, useEffect } from "react";
import { filterFilmsByDirector, getFilmStats, getListOf } from "../helpers/film.helpers";
import { Link } from "react-router-dom";
export default function FilmsPage(props) {
  const [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState([]);


  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        //console.log(result);
        setList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getFilms();
  }, []);
let filmsByDirector=filterFilmsByDirector(list, searchDirector);
let directors = getListOf(list, "director");
const{total,avg_score,latestFilm}=getFilmStats(filmsByDirector);
console.log(total,avg_score,latestFilm)

  return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form>
          <div id="form-Group">
            <label htmlFor="searchDirector">Filter By Director</label>
            <select
              value={searchDirector}
              onChange={(e) => setSearchDirector(e.target.value)}
            >
              <option value="">ALL</option>
              {directors.map((director, index) => {
                return <option key={director + index} value={director}>
                    {director}
                  </option>
              })}
            </select>
          </div>
        </form>
        <div>
  <div>
    <span># Of Films</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film</span>
    <span>{latestFilm}</span>
  </div>
</div>
        <ul>
          {filmsByDirector.map((film) => {
            return <li key={film.id}>
                <Link to={`/film/${film.id}`}>
                  <h2>{film.title}</h2>
                </Link>
                <img src={film.image} alt="movie photo"></img>
              </li>
          })}
        </ul>
    </div>
  );
}
