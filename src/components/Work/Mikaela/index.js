import './index.scss'
import ReactGA from 'react-ga4'

export default function Mikaela() {
  return (
    <a
      href="https://github.com/kira0x1/mikaela"
      rel="noreferrer"
      target="_blank"
      className="work-box mikaela"
      onClick={() => {
        ReactGA.event({
          category: 'Work',
          action: 'Mikaela Clicked',
          label: 'Mikaela',
        })
      }}
    >
      <div className="inner-box">
        <div className="text-container">
          Mikaela is a discord music bot that gives users the ability to store
          <br />
          their favorite songs, and create playlists on discord.
        </div>
      </div>
    </a>
  )
}
