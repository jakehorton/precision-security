import React from "react"
import { Link } from "gatsby"

const Header = props => (
  <header className="header">
    <div className="wrapper">
      <div className="row centered">
        <div className="col col-8">
          <nav className="nav">
            <div className="logo">
              <Link to="/">Precision Security Ltd</Link>
            </div>
            <ul className="nav-links">
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/services"><li>Services</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
