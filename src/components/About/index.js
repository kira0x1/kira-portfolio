import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 500)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters content="About" letterClass={letterClass} idx={15} />
        </h1>
        <p>meow</p>
        <p>meow</p>
        <p>meow</p>
      </div>
    </div>
  )
}

export default About
