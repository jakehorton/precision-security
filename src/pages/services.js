import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMedal, faCalendarCheck, faClock } from "@fortawesome/free-solid-svg-icons"
import retail from '../images/retail.jpg'
import corporate from '../images/corporate.jpg'



library.add(faMedal, faCalendarCheck, faClock)


const ServicesPage = () => (
  <>
      <Header />
        <div className="wrapper services-page">
          <div className="row centered">
            <div className="col col-8">
              <div className="services-banner">
                <h1 className="heading--l">Services
                </h1>
                <p className="body--s">
                  We are a company with extensive security experience within Retail, Commercial, Industrial and Event Management. We offer a bespoke security solution for all our clients needs.                </p>
                <p className="body--s">
                Why choose Precision Security ?
                <br/>
                We offer the highest level of customer service and performance. We are competitive; offering a great price and a quality service.

                Our management team have worked within the security industry for the past 25 years and we have extensive experience within the team, covering all aspects of  Security.

                All our operatives are licencsed in accordance with the Security Industry Authority  regulations and all our officers are criminally vetted and cleared.
                </p>
                <p className="body--s offer">
                  The Quality Services we offer are:
                  </p>
                  <ul>
                    <div>
                      <li className="service">
                        <img className="image-left" src={retail} />
                          <h2 className="heading--m"> Retail Security / Loss prevention / Store detectives </h2>
                          <p className="body--s">
                            Our retail officers are highly trained and can undertake various duties such as tag checks, stock checks, in-store promotions/events, delivery checks,  but most importantly, fronting your premises in a professional manner, with a professional image.

                            We ensure our retail officers work as part of your team and we encourage our officers to continually try to improve the level of security services provided by working to agreed store specific priorities.

                            We work with your managers to get the best tailored performance from our officers.

                            We like to review periodically our service levels with our clients in an open honest review meeting which is graded by the senior manager either at store or regional level.

                            We encourage officers to aim high and motivate them to achieve professionally and personally in life, with ongoing specialist training and guidance throughout their careers. We have high expectation and our standards are delivered with precision.
                          </p>
                      </li>
                      <li className="service">
                      <img className="image-right" src={corporate} />
                        <h2 className="heading--m">Corporate Security </h2>
                        <p className="body--s">
                        Precision provides a bespoke Corporate Security service to all our customers . All sites are individually risk assessed and full operating procedures are agreed with our client.

                        Assignment instructions and regular visits to the site are conducted by our contract managers.

                        Standards and level of satisfaction are reviewed regularly to ensure a quality service.

                        Typical Duties conducted are:

                        Reception Roles, Gate house duties, Control Rooms, Patrols using tagged data systems.Access control management, CCTV operation and various other corporate functions as required by the client.

                        All our officers are hand picked to match the clients need. We have a continuous training programme and operate with detailed comprehensive assignment instructions which are reviewed regularly and adjusted to your business needs.

                        We deliver a high level of service with most of our operatives coming from an ex military background.
                        </p>
                      </li>
                    </div>
                    <li className="service">
                      <div className="text one">
                       <h2 className="heading--m">Industrial site security </h2>
                        <p className="body--s">
                          We realise the importance of good construction site security. As your site build increases, so do the products, risk and equipment left on site.

                          We can offer a cost effective guarding solution to protect your assets and reduce the threat of theft and vandalism and the consequential disruption of the site.

                          All our officers are site specifically trained as well as trained in accordance with the Security Industry Authority. All our officers are criminally checked and licenced by the SIA.

                          Our price is competitive and we deliver a quality reliable honest checkable service.
                        </p>
                        </div>
                    </li>
                    <li className="service">
                      <div className="text two">
                        <h2 className="heading--m">Response Security </h2>
                          <p className="body--s">
                            We can provide emergency cover, short term contracts, ADHOC cover and free risk assessment if required by our clients, all catered for within our responsive security service.

                            We can react to your business needs.

                            If you need to increase your security short term or are looking for a quality response service Precision Security can deliver.

                            Holiday cover, Sickness cover or temporary cover can be provided to compliment your teams.

                            We are competitive on price and pride ourselves on the high standards of service we deliver.
                          </p>
                      </div>
                    </li>
                    <li className="service">
                      <div className="text one">
                        <h2 className="heading--m">Event security / close protection</h2>
                        <p className="body--s">
                          We can cater for all types of event work from private functions, sporting events to charity events. We have an experienced team of predominantly ex military operatives. We deliver a precision service which we can manage from risk assessment to delivery.

                          Our teams consist of a mixture of Door Supervisors and Close Protection operatives depending on the role defined by our client.

                          We are able to provide escort services, personal protection, residential security and surveilance or counter surveilance measures.

                          Please contact us for advice if required.
                        </p>
                      </div>
                    </li>
                  </ul>

              </div>
            </div>
          </div>
        </div>


  </>
)

export default ServicesPage
