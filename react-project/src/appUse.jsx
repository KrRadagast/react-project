import { useState, useEffect } from "react";
import FilmsList from "./components/flimsfunction";
function App(props) {
const [list, setList] = useState(["ready","set","go"]);
const [text, setText] = useState("");
const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
};
return (
    <div className="App">
    <h1>Hello There</h1>
    <form onSubmit={onSubmit}>
        <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Submit</button>
    </form>
    <ul>
        {list.map((item, index) => {
        return <li key={index}>{item}</li>;
        })}
    </ul>
    <FilmsList />
    </div>
);
}
export default App;
