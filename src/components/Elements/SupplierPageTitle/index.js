import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import "./style.scss"

export default ({ title }) => (
  <Container className="supplier-page-title" fluid={true}>
    <Row>
      <Col>
        <div className="page_title">
          <Container fluid="xl">
            <Row>
              <Col>
                <div className="title">
                  <h1 dangerouslySetInnerHTML={{ __html: title }} />
                </div>
                <div className="pagenation">
                  <div id="crumbs">
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    <span className="delimiter">/</span>{" "}
                    <span
                      className="current"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </Row>
  </Container>
)
