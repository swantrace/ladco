import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import { Div, Image, Ul, Li, Button, FontAwesome } from "../Elements/index"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"

import "./style.scss"

const Header = ({ className, button, fontawesome, menus, logo, id }) => {
  const [responsiveMenu, setResponsiveMenu] = useState(false)
  return (
    <Sticky holderCmp="header" className={`headerArea ${className}`} id={id}>
      <Container>
        <Row>
          <Col lg={3} sm={button ? 7 : 11} xs={8}>
            <Div className="logo">
              <Link to="/">
                <Image src={logo} alt="logo" />
              </Link>
            </Div>
          </Col>
          <Col
            lg={button ? 7 : 9}
            className={
              responsiveMenu
                ? "responsiveMenuWrap active"
                : "responsiveMenuWrap"
            }
          >
            <Ul className="mainMenu">
              {menus.map(menu => (
                <Li key={menu.id}>
                  <Link
                    activeClassName="active"
                    to={menu.id}
                    onClick={() => setResponsiveMenu(false)}
                  >
                    {menu.name}
                  </Link>
                </Li>
              ))}
            </Ul>
          </Col>
          {button && (
            <Col lg={2} sm={4} className="d-none d-sm-block">
              <Button className="fileDownloadBtn">
                {button}
                {fontawesome && <FontAwesome name={fontawesome} />}
              </Button>
            </Col>
          )}
          <Col className="d-lg-none d-block" sm={1} xs={4}>
            <Ul
              onClick={() => setResponsiveMenu(!responsiveMenu)}
              className={
                responsiveMenu
                  ? "responsiveMenuTigger active"
                  : "responsiveMenuTigger"
              }
            >
              <Li className="first"></Li>
              <Li className="second"></Li>
              <Li className="third"></Li>
            </Ul>
          </Col>
        </Row>
      </Container>
    </Sticky>
  )
}
export default Header
