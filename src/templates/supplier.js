import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import { Container, Row, Col } from "reactstrap"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SupplierPageTitle from "../components/Elements/SupplierPageTitle"
import SupplierPageBasicInfo from "../components/Elements/SupplierPageBasicInfo"
import logo from "../assets/images/logo.png"

const menus = [
  { name: "HOME", id: "/" },
  { name: "PRAIRIE POINTE", id: "/prairie-pointe" },
  { name: "HIGHLAND POINTE", id: "/highland-pointe" },
  { name: "SOUTH POINTE", id: "/south-pointe" },
  { name: "ROYALWOOD", id: "/royalwood" },
  { name: "ABOUT US", id: "/about-us" },
  { name: "CONTACT US", id: "/contact-us" },
]

export default ({
  pageContext,
  pageContext: {
    id,
    title,
    content,
    slug,
    gallery,
    supplierLogo,
    address,
    email,
    facebook,
    fax,
    googlePlus,
    openingHours,
    telephone,
    twitter,
    website,
  },
}) => {
  return (
    <Fragment>
      <Header menus={menus} className="LadcoHeaderArea" logo={logo} />
      <main className={`main-${slug}`} style={{ overflow: "hidden" }}>
        <SupplierPageTitle title={title}></SupplierPageTitle>
        <Container className="supplier-page-content-wrapper my-5" fluid="xl">
          <Row>
            <Col md="9">
              <SupplierPageBasicInfo
                title={title}
                supplierLogo={supplierLogo}
                address={address}
                telephone={telephone}
                fax={fax}
                email={email}
                website={website}
              />
              <div className="divider"></div>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Col>
            <Col md="3">
              <div className="social-media-posts">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/ladcocompanyltd/"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/ladcocompanyltd/"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/ladcocompanyltd/">
                      Ladco Company Limited
                    </a>
                  </blockquote>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer menus={menus} className="LadcoFooterArea" />
    </Fragment>
  )
}
