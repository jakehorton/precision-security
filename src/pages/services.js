import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"


const ServicesPage = () => (
  <>
      <Header />
        <div className="wrapper">
          <div className="row centered">
            <div className="col col-8">
              <div className="home-banner">
                <h1 className="heading--l">Services
                </h1>
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
