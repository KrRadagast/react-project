import { useState, useEffect } from "react";
import FilmsList from "./components/flimsfunction";
import {BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom" 
import  {HomePage}  from "./pages";
import {FilmsPage} from "./pages";
function App(props) {

    return (
        
    <Router>
        <nav>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="films">Films</NavLink>
                </li>
            </ul>
        </nav>
        
    <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/films" element={<FilmsPage/>}/>
    </Routes>
    </Router>
);
}

export default App;



{/* // import React,{ Component } from "react";
// import FilmsList from "./components/filmsets";
// import './App.css';


// class App extends Component() {  */}
//     super(props);
//     this.state={
//     list:["ready","set","go"],
//     text:"",};
//     this.onSubmit=this.onSubmit.bind(this)
//     };
//     onSubmit(event){
//       event.preventDefault();
//       let newList=[...this.state,this.state.text];
//       this.setState({
//         list:newList,
//         text:""
//       });
//     }
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello There</h1>
//         <form onSubmit={this.onSubmit}>;
//         <input 
//         type="text" 
//         name="text" 
//         id="text" 
//         value={this.state.text} 
//         onChange={(event) => this.setState ({text:event.target.value
//         })}/>
//         <button type ="submit">Submit</button>
//         </form>
//         <ul>
//           {this.state.list.map((item, index)=>{
//             return<li key={item +index}>{item}</li>}
//           )}
//         </ul>
//         <FilmsList/>
//       </div>
//     );
//   }
// }


// export default App;
