import React, { Fragment } from "react"
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
import ProjectLinkBanner from "../components/Elements/ProjectLinkBanner"
import ServiceIconBoxes from "../components/Elements/ServiceIconBoxes"
import AboutUsTimeline from "../components/Elements/AboutUsTimeline"
import PropertyMapModalTriggerBlock from "../components/Elements/PropertyMapModalTriggerBlock"
import BuilderLogoListings from "../components/Elements/BuilderLogoListings"
import ProjectHeader from "../components/Elements/ProjectHeader"
import PropertyMapModalTrigger2Block from "../components/Elements/PropertyMapModalTrigger2Block"
import ProjectPhotoGallery from "../components/Elements/ProjectPhotoGallery"
import ProjectFeatureCards from "../components/Elements/ProjectFeatureCards"
import AboutUsIntroduction from "../components/Elements/AboutUsIntroduction"
import AboutUsWhoWeAre from "../components/Elements/AboutUsWhoWeAre"
import FeatureIconBoxes from "../components/Elements/FeatureIconBoxes"
import AboutUsHeader from "../components/Elements/AboutUsHeader"
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
      <main className={`main-${pageContext.slug}`}>
        <PageWrapperFunc pageContext={pageContext}>
          {pageContext.blocks.map(block =>
            block.__typename === "WPGraphQL_CoreHtmlBlock" ? (
              <div
                dangerouslySetInnerHTML={{ __html: block.saveContent }}
              ></div>
            ) : block.__typename === "WPGraphQL_AcfProjectLinkBannerBlock" ? (
              <ProjectLinkBanner
                {...JSON.parse(block.renderedContent)}
              ></ProjectLinkBanner>
            ) : block.__typename === "WPGraphQL_AcfServiceIconBoxesBlock" ? (
              <ServiceIconBoxes
                {...JSON.parse(block.renderedContent)}
              ></ServiceIconBoxes>
            ) : block.__typename === "WPGraphQL_AcfAboutUsTimelineBlock" ? (
              <AboutUsTimeline
                {...JSON.parse(block.renderedContent)}
              ></AboutUsTimeline>
            ) : block.__typename ===
              "WPGraphQL_AcfPropertyMapModalTriggerBlock" ? (
              <PropertyMapModalTriggerBlock
                {...JSON.parse(block.renderedContent)}
              ></PropertyMapModalTriggerBlock>
            ) : block.__typename === "WPGraphQL_AcfProjectHeaderBlock" ? (
              <ProjectHeader
                {...JSON.parse(block.renderedContent)}
              ></ProjectHeader>
            ) : block.__typename === "WPGraphQL_AcfBuilderLogoListingsBlock" ? (
              <BuilderLogoListings
                {...JSON.parse(block.renderedContent)}
              ></BuilderLogoListings>
            ) : block.__typename ===
              "WPGraphQL_AcfPropertyMapModalTriggerBlock" ? (
              <PropertyMapModalTriggerBlock
                {...JSON.parse(block.renderedContent)}
              ></PropertyMapModalTriggerBlock>
            ) : block.__typename ===
              "WPGraphQL_AcfPropertyMapModalTrigger2Block" ? (
              <PropertyMapModalTrigger2Block
                {...JSON.parse(block.renderedContent)}
              ></PropertyMapModalTrigger2Block>
            ) : block.__typename === "WPGraphQL_AcfProjectPhotoGalleryBlock" ? (
              <ProjectPhotoGallery
                {...JSON.parse(block.renderedContent)}
              ></ProjectPhotoGallery>
            ) : block.__typename === "WPGraphQL_AcfProjectFeatureCardsBlock" ? (
              <ProjectFeatureCards
                {...JSON.parse(block.renderedContent)}
              ></ProjectFeatureCards>
            ) : block.__typename === "WPGraphQL_AcfAboutUsHeaderBlock" ? (
              <AboutUsHeader
                {...JSON.parse(block.renderedContent)}
              ></AboutUsHeader>
            ) : block.__typename === "WPGraphQL_AcfAboutUsIntroductionBlock" ? (
              <AboutUsIntroduction
                {...JSON.parse(block.renderedContent)}
              ></AboutUsIntroduction>
            ) : block.__typename === "WPGraphQL_AcfAboutUsWhoWeAreBlock" ? (
              <AboutUsWhoWeAre
                {...JSON.parse(block.renderedContent)}
              ></AboutUsWhoWeAre>
            ) : block.__typename === "WPGraphQL_AcfFeatureIconBoxesBlock" ? (
              <FeatureIconBoxes
                {...JSON.parse(block.renderedContent)}
              ></FeatureIconBoxes>
            ) : null
          )}
        </PageWrapperFunc>
      </main>
      <Footer menus={menus} className="LadcoFooterArea" />
    </Fragment>
  )
}
