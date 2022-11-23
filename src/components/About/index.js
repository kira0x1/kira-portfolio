import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters content="About" idx={15}></AnimatedLetters>
        </h1>
        <p>
          meow
        </p>
        <p>
          meow
        </p>
        <p>
          meow
        </p>
      </div>
    </div>
  )
}

export default About
