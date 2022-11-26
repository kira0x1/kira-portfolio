import Logo from './Logo'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../components/AnimatedLetters'
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
        <div className="subtitle-text">
          <h2>
            Full-Stack Developer / Typescript
            <br />
            Discord bots / React / Electron
          </h2>
        </div>
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
