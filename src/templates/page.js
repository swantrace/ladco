import React, { Fragment } from "react"
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Pages/Home"
import PrairiePointe from "../components/Pages/PrairiePointe"
import HighlandPointe from "../components/Pages/HighlandPointe"
import SouthPointe from "../components/Pages/SouthPointe"
import Royalwood from "../components/Pages/Royalwood"
import AboutUs from "../components/Pages/AboutUs"
import ContactUs from "../components/Pages/ContactUs"
import "../components/CustomElements"
import logo from "../assets/images/logo.png"
import "../assets/css/style.css"

const menus = [
  { name: "HOME", id: "/" },
  { name: "PRAIRIE POINTE", id: "/prairie-pointe" },
  { name: "HIGHLAND POINTE", id: "/highland-pointe" },
  { name: "SOUTH POINTE", id: "/south-pointe" },
  { name: "ROYALWOOD", id: "/royalwood" },
  { name: "ABOUT US", id: "/about-us" },
  { name: "CONTACT US", id: "/contact-us" },
]

export default ({ pageContext }) => {
  debugger
  var PageWrapperFunc = null
  switch (pageContext.slug) {
    case "home":
      PageWrapperFunc = props => (
        <Home pageContext={props.pageContext}>{props.children}</Home>
      )
      break
    case "prairie-pointe":
      PageWrapperFunc = props => (
        <PrairiePointe pageContext={props.pageContext}>
          {props.children}
        </PrairiePointe>
      )
      break
    case "highland-pointe":
      PageWrapperFunc = props => (
        <HighlandPointe pageContext={props.pageContext}>
          {props.children}
        </HighlandPointe>
      )
      break
    case "south-pointe":
      PageWrapperFunc = props => (
        <SouthPointe pageContext={props.pageContext}>
          {props.children}
        </SouthPointe>
      )
      break
    case "royalwood":
      PageWrapperFunc = props => (
        <Royalwood pageContext={props.pageContext}>{props.children}</Royalwood>
      )
      break
    case "about-us":
      PageWrapperFunc = props => (
        <AboutUs pageContext={props.pageContext}>{props.children}</AboutUs>
      )
      break
    case "contact-us":
      PageWrapperFunc = props => (
        <ContactUs pageContext={props.pageContext}>{props.children}</ContactUs>
      )
      break
    default:
      break
  }

  return (
    <Fragment>
      <Header menus={menus} className="LadcoHeaderArea" logo={logo} />
      <main>
        <PageWrapperFunc pageContext={pageContext}>
          {pageContext.blocks.map(block => (
            <div
              dangerouslySetInnerHTML={{ __html: block.renderedContent }}
            ></div>
          ))}
        </PageWrapperFunc>
      </main>
      <Footer menus={menus} className="LadcoFooterArea" />
    </Fragment>
  )
}
