import React, { useState } from "react"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap"
import { H2 } from "../index"
import classnames from "classnames"
import "./style.scss"

export default ({ who_we_are, location }) => {
  const [activeTab, setActiveTab] =
    location && location.state && location.state.tab
      ? useState(location.state.tab)
      : useState("1")

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Container fluid="xl" className="about-us-who-we-are my-5">
      <Row>
        <Col>
          <H2 data-animation="">Who We Are</H2>
          <Nav tabs className="tabs-horizontal">
            {who_we_are
              .map(item => item.title)
              .map((title, index) => (
                <NavItem
                  key={title}
                  className={classnames({
                    active: activeTab === `${index + 1}`,
                  })}
                >
                  <NavLink
                    className={classnames({
                      active: activeTab === `${index + 1}`,
                    })}
                    onClick={() => {
                      toggle(`${index + 1}`)
                    }}
                  >
                    {title.toUpperCase()}
                  </NavLink>
                </NavItem>
              ))}
          </Nav>
          <TabContent activeTab={activeTab}>
            {who_we_are
              .map(item => item.content)
              .map((content, index) => (
                <TabPane tabId={`${index + 1}`} key={index}>
                  <Row style={{ width: "100%" }}>
                    <Col sm="12">
                      <div
                        className="mt-5 p-3"
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></div>
                    </Col>
                  </Row>
                </TabPane>
              ))}
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}
