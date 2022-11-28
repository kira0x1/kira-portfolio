import './index.scss'
import ReactGA from 'react-ga4'

export default function Redact() {
  return (
    <a
      href="https://redact.dev/"
      rel="noreferrer"
      target="_blank"
      className="work-box redact"
      onClick={() => {
        ReactGA.event({
          category: 'Work',
          action: 'Redact Clicked',
          label: 'Redact',
        })
      }}
    >
      <div className="inner-box">
        <div className="text-container">
          Redact is a tool that automatically deletes your old posts from
          multiple services
        </div>
      </div>
    </a>
  )
}
