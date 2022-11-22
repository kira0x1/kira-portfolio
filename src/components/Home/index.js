import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'kira'.split('')

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={1}
          />
          <br />
        </h1>
        <h2>
          Full-Stack Developer / Typescript
          <br />
          Discord bots / React / Electron
        </h2>
        <br />
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
