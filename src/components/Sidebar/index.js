import './index.scss'
import ReactGA from 'react-ga4'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/logo.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={ReactGA.event({
          category: 'Logo Link',
          action: 'Logo Nav Clicked',
          label: 'Logo Button Click',
        })}
      >
        <img src={Logo} alt="logo" />
      </Link>

      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={ReactGA.event({
            category: 'Home Link',
            action: 'HomeBtn Nav Clicked',
            label: 'Home Button Click',
          })}
        >
          <FontAwesomeIcon icon={faHome} color="#f7a194"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
          onClick={ReactGA.event({
            category: 'About Link',
            action: 'AboutBtn Nav Clicked',
            label: 'About Button Click',
          })}
        >
          <FontAwesomeIcon icon={faUser} color="#f7a194"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          onClick={ReactGA.event({
            category: 'Contact Link',
            action: 'ContactBtn Nav Clicked',
            label: 'Contact Button Click',
          })}
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
            onClick={ReactGA.event({
              category: 'Github Link',
              action: 'GithubBtn Nav Clicked',
              label: 'Github Button Click',
            })}
          >
            <FontAwesomeIcon icon={faGithub} color="#f7a194"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
