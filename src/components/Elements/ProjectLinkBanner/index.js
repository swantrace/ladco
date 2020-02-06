import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import "./style.scss"

export default ({ title, content, link_target, link_text }) => (
  <Container className="project-link-banner" fluid={true}>
    <Row>
      <Col>
        <div
          className="punch_text03 alternative_punch animated-block  group2 transparent-animation fadeIn animated"
          data-animation="fadeIn"
          style={{ animationDelay: "0s" }}
        >
          <Container fluid="xl">
            <Row>
              <Col className="left" md="9">
                <h1>
                  {title}
                  <em>{content}</em>
                </h1>
              </Col>
              <Col className="right" md="3">
                <Link
                  to={link_target}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bolder", fontFamily: "Open Sans" }}
                >
                  <i
                    className="icon icon-leaf2"
                    style={{
                      position: "relative",
                      top: "13px",
                      fontWeight: "bolder",
                      fontSize: "1.5em",
                    }}
                  ></i>
                  &nbsp; {link_text}
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
)
