import {Link, withRouter} from 'react-router-dom'

import {RiFileSearchLine} from 'react-icons/ri'
import {MdOutlineCall} from 'react-icons/md'

import {CgProfile} from 'react-icons/cg'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/" className="bh-p">
            BRisphere
          </Link>

          <li className="nav-menu-item-mobile-home">
            <Link to="/" className="nav-link">
              <CgProfile />
            </Link>
          </li>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/" className="bh-p">
            Brisphere
          </Link>

          <ul className="nav-menu-home">
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Discover
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/bookmarks" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/jobs" className="nav-link">
              <RiFileSearchLine className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/bookmarks" className="nav-link">
              <MdOutlineCall className="nav-bar-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
