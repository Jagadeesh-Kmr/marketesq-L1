import {Link, withRouter} from 'react-router-dom'

import {RiFileSearchLine} from 'react-icons/ri'
import {MdOutlineCall} from 'react-icons/md'
import {BiBuildings} from 'react-icons/bi'

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
            <Link to="/stayDetails" className="nav-link">
              <BiBuildings />
            </Link>
          </li>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/" className="bh-p">
            Brisphere
          </Link>

          <ul className="nav-menu-home">
            <li className="nav-menu-item">
              <Link to="/stayDetails" className="nav-link">
                My Stay
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
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
            <Link to="/" className="nav-link">
              <RiFileSearchLine className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <MdOutlineCall className="nav-bar-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
