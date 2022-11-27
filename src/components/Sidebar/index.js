import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/logo.png'
import useAnalyticsEventTracker from '../UseAnalyticsTracker'

const Sidebar = () => {
  const gaEventTracker = useAnalyticsEventTracker('Sidebar')

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => gaEventTracker('Home Button')}
        >
          <FontAwesomeIcon icon={faHome} color="#f7a194"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
          onClick={() => gaEventTracker('About Button')}
        >
          <FontAwesomeIcon icon={faUser} color="#f7a194"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          onClick={() => gaEventTracker('Contact Button')}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#f7a194"></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kira0x1"
            onClick={() => gaEventTracker('Github Button')}
          >
            <FontAwesomeIcon icon={faGithub} color="#f7a194"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
