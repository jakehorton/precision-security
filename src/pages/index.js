import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"


const IndexPage = () => (
  <>
    <SEO title="Home" />
      <Header />
        <div className="wrapper">
          <div className="row centered">
            <div className="col col-8">
              <div className="home-banner">
                <h1 className="heading--l">Launch a product. Grow your brand.
                    Build better digital.
                </h1>
                <p className="body--m">
                    We are a creative and digital agency specialising in branding, design strategy and digital development.
                    Work with our expert team to grow your business.
                </p>
                <Link to="/services"><p className="body--m">See what we can do</p></Link>
              </div>
            </div>
          </div>
        </div>


  </>
)

export default IndexPage
