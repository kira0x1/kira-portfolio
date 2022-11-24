import './index.scss'

const AnimatedLetters = ({ letterClass, content, idx, elementId }) => {
  return (
    <span>
      {content.split('').map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          id={elementId}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
