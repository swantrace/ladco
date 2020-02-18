import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { H4, Ul, Li, FontAwesome } from "../Elements/index"
import "./style.scss"

const Footer = ({ menus }) => {
  return (
    <Fragment>
      <div className="footerArea">
        <div className="arrow"></div>
        <div className="clearfix" style={{ paddingTop: "10px" }}></div>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <H4>Ladco Company Limited</H4>
              <Ul
                className="contactAddress"
                style={{ listStyle: "none", paddingLeft: 0 }}
              >
                <Li>
                  <FontAwesome name="phone" /> 204-982-5900
                </Li>
                <Li>
                  <FontAwesome name="envelope-o" /> info@ladcocompany.com
                </Li>
                <Li>
                  <FontAwesome name="map-marker" /> 200-40 Lakewood Boulevard,  <br />Winnipeg, MB, R2J 2M6
                </Li>
              </Ul>
            </Col>
            <Col xs="12" md="3">
              <H4>Links</H4>
              <Ul
                className="footerMenu"
                style={{ listStyle: "none", paddingLeft: 0 }}
              >
                {menus.map(menu => (
                  <Li key={menu.id}>
                    <Link activeClassName="active" to={menu.id}>
                      {menu.name}
                    </Link>
                  </Li>
                ))}
              </Ul>
            </Col>
            <Col xs="12" md="3">
              <H4>Follow Us</H4>
              <Ul
                className="socialNetwork"
                style={{ listStyle: "none", paddingLeft: 0 }}
              >
                <Li style={{ display: "inline-block" }}>
                  <a
                    href="https://www.facebook.com/ladcocompanyltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesome
                      name="facebook-official"
                      style={{
                        width: "48px",
                        height: "48px",
                        fontSize: "48px",
                      }}
                    />
                  </a>
                </Li>
                <Li style={{ display: "inline-block", paddingLeft: "10px" }}>
                  <a
                    href="https://www.instagram.com/prairiepointe.ladco/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesome
                      name="instagram"
                      style={{
                        width: "48px",
                        height: "48px",
                        fontSize: "48px",
                      }}
                    />
                  </a>
                </Li>
              </Ul>
            </Col>
          </Row>
        </Container>
        <div className="clearfix" style={{ paddingTop: "10px" }}></div>
      </div>
      <footer>
        <Container>
          <Row>
            <Col>
              <b>
                Copyright Ladco Company Limited 2014-{new Date().getFullYear()}
              </b>
              | Powered By{" "}
              <a
                href="http://idomedia.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                IDO MEDIA
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  )
}
export default Footer
