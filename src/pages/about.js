import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"


const AboutPage = () => (
  <>
      <Header />
        <div className="wrapper">
          <div className="row centered">
            <div className="col col-8">
              <div className="about-banner">
                <h1 className="heading--l">About us
                </h1>
                <p className="body--m">
                    We were Founded by an ex Royal Marine and believe in being the best at what we do.
                </p>
                <p className="body--m">
                    Our aim is to provide a quality cost effective security solution to our clients. We have experts in all aspects of security from Retail Loss Prevention to Corporate Managers and Event/Close protection operatives. We operate an open honest transparent service , with instant reporting using the latest technology. We operate a quality management system and are an ethical company which operates an environmental policy in all that we do. We have pre dominantly ex military personel in all our assignments, and  pride ourselves on the level of service we deliver.
                </p>
                <p className="body--m">
                    We offer a unique tailored service with expert experience and a high level of  customer focused care. We are not striving to be the biggest company but we are determined to be the best at what we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>


  </>
)

export default AboutPage
