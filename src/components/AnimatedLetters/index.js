import './index.scss'

const AnimatedLetters = ({ letterClass, content, idx }) => {
  return (
    <span>
      {content.split('').map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
