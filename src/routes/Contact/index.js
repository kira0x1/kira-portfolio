import { useState, useEffect } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
  }, [])

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            content="Email me at "
            idx={1}
          />
          <AnimatedLetters
            letterClass={letterClass}
            content="kira.eva@protonmail.com"
            idx={1}
            elementId="email-text"
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            content="Meow, im still working on this site"
            idx={1}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            content="While you're here try hovering over the text"
            idx={1}
          />
        </h1>
      </div>
    </div>
  )
}

export default Contact
