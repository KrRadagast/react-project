import { useState, useEffect } from "react"
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

export default function FilmsPage(props){
    const [list, setList]= useState([]);
    let [searchDirector,setSearchDirector]=useState([]);
function getFilms(){
    fetch("https://studioghibliapi-d6fc8.web.app/films")
    .then((response)=> {return response.json()})
    .then((result)=>{
        console.log(result);
        setList(result);
    })
    .catch((error) => {console.log(error)});
}
let filmsByDirector=filterFilmsByDirector(list,searchDirector);
let directors=getListOf(list, "director")
useEffect(()=>{
    getFilms();
}, []);

return (
    <div>
        <ul>
            <h1>Studio Ghibli Films</h1>
            <form>
                <div id="form-Group">
                    <label htmlFor="searchDirector">Filter By Director</label>
                    <select value={searchDirector} 
                    onChange={(e)=>setSearchDirector(e.target.value)}>
                        <option value="">ALL</option>
                        {directors.map((director,index)=>{
                            return(
                                <option key={director + index} value={director}>
                                        {director}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </form>
            <ul>
                {filmsByDirector.map((film)=>{
                    return <li key={film.id}>
                        <h2>{film.title}</h2>
                        <img src={film.image} alt="movie photo"></img>
                    </li>
                })}
                {list.map(film =>(
                <li key={film.id}>
                {film.title} 
                </li>
                ))}
            </ul>
            
        </ul>
    </div>
    
);

}

