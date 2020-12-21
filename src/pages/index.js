import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faMedal, faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import london from "../images/london.jpg"


library.add(faArrowRight, faMedal, faCalendarCheck, faClock)

const IndexPage = () => (
  <>
    <SEO title="Home" />
      <Header />

              <div className="home-banner">
                <div className="background"/>
                  <div className="wrapper">
                    <div className="row centered">
                      <div className="col col-8">
                        <h1 className="heading--xl">Security services <br></br> <span>You can rely on</span></h1>
                        <p className="body--m">
                            We are a creative and digital agency specialising in branding, design strategy and digital development.
                            Work with our expert team to grow your business.
                        </p>

                        <Link to="/services"><p className="body--m see-services">See what we can do <FontAwesomeIcon icon="arrow-right" /></p></Link>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-body">
                    <div className="wrapper">
                      <div className="row centered">
                        <div className="col col-8">
                          <div className="icons">
                            <div className="icon">
                              <FontAwesomeIcon icon="calendar-check" />
                              <h3 className="body--s">Over 10 years experience</h3>
                            </div>
                            <div className="icon">
                              <FontAwesomeIcon icon="medal" />
                              <h3 className="body--s">SIA approved</h3>
                            </div>
                            <div className="icon">
                              <FontAwesomeIcon icon="clock" />
                              <h3 className="body--s">24/7 Comprehensive security services</h3>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>





  </>
)

export default IndexPage
