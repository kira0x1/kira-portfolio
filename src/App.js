// import logo from './logo.png'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

/*
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
    */
