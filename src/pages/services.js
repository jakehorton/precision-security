import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedal, faCalendarCheck, faClock } from '@fortawesome/free-solid-svg-icons'


library.add(faMedal, faCalendarCheck, faClock)


const ServicesPage = () => (
  <>
      <Header />
        <div className="wrapper">
          <div className="row centered">
            <div className="col col-8">
              <div className="services-banner">
                <h1 className="heading--l">Services
                </h1>

                <div className="icons">
                  <div className="icon">
                    <FontAwesomeIcon icon="calendar-check" />
                    <h3>Over 10 years experience</h3>
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon="medal" />
                    <h3>SIA approved</h3>
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon="clock" />
                    <h3>24/7 Comprehensive security services</h3>
                  </div>
                </div>
                <p className="body--m">
                  We are a company with extensive security experience within Retail, Commercial, Industrial and Event Management. We offer a bespoke security solution for all our clients needs.                </p>
                <p className="body--m">
                Why choose Precision Security ?
                <br/>
                We offer the highest level of customer service and performance. We are competitive; offering a great price and a quality service.

                Our management team have worked within the security industry for the past 25 years and we have extensive experience within the team, covering all aspects of  Security.

                All our operatives are licencsed in accordance with the Security Industry Authority  regulations and all our officers are criminally vetted and cleared.
                </p>
                <p className="body--m">
                  The Quality Services we offer are:
                  <ul>
                    <li> Emergency short notice response security </li>
                    <li> Retail security/ Loss prevention / Store detectives </li>
                    <li> Corporate Security </li>
                    <li> Industrial site security </li>
                    <li> Construction site security </li>
                    <li> Event security / close protection </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>


  </>
)

export default ServicesPage
