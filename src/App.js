import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-parent">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ul className="Nav">
          <li className="Nav-item">
            <a
              className="Nav-link"
              href="https://github.com/kira0x1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="Nav-item">
            <a
              className="Nav-link"
              href="https://twitter.com/kira0x1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="Nav-item">
            <a
              className="Nav-link"
              href="https://linktr.ee/catgirlkira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Socials
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
