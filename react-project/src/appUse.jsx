// import { useState, useEffect } from "react";
// import FilmsList from "./components/flimsfunction";
// import React {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
// function App(props) {
// const [list, setList] = useState(["ready","set","go"]);
// const [text, setText] = useState("");
// const onSubmit = (e) => {
//     e.preventDefault();
//     setList([...list, text]);
//     setText("");
// };
// return (
//     <router>
//     <routes>
//     <routes
//     path="/"
//     element={<FilmsList />}
//     />
//     <route>

//     </route>
//     </router>

//     <div className="App">
//     <h1>Hello There</h1>
//     <form onSubmit={onSubmit}>
//         <input
//         type="text"
//         name="text"
//         id="text"
//         value={text}
//         onChange={(event) => setText(event.target.value)}
//         />
//         <button type="submit">Submit</button>
//     </form>
//     <ul>
//         {list.map((item, index) => {
//         return <li key={index}>{item}</li>;
//         })}
//     </ul>
//     <browserRouter>
//     <FilmsList />
//     </browserRouter>
    
//     </div>
// );
// }
// export default App;
