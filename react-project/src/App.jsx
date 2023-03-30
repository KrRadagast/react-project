// import React,{ Component } from "react";
// import FilmsList from "./components/filmsets";
// import './App.css';


// class App extends Component() { 
//   constructor(props){
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
