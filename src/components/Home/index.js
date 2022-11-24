import Logo from './Logo'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} content={'kira'} idx={1} />
        </h1>
        <br />
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            content={'Full-Stack Developer / Typescript'}
            idx={1}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            content={'Discord bots / React / Electron'}
            idx={1}
          />
        </h2>
        <br />
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>

      <Logo />
    </div>
  )
}

export default Home
