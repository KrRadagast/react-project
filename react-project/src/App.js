import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello there</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Star wars the clone wars</p>
        <ul>
          501st
          <li>
            Captain Rex
          </li>
          <li>
            Ahsoka tano
          </li>
          <li>
            Anakin Skywalker
          </li>
        </ul>
        <p>
          React is so cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
