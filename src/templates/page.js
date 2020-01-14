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
      <main
        className={`main-${pageContext.slug}`}
        style={{ overflow: "hidden" }}
      >
        <PageWrapperFunc pageContext={pageContext}>
          {pageContext.blocks.map((block, index) =>
            block.__typename === "WPGraphQL_CoreHtmlBlock" ? (
              <div
                className="custom-html"
                key={`core-html-block-${index}`}
                dangerouslySetInnerHTML={{ __html: block.saveContent }}
              ></div>
            ) : block.__typename === "WPGraphQL_AcfProjectLinkBannerBlock" ? (
              <ProjectLinkBanner
                key={`acf-project-link-banner-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></ProjectLinkBanner>
            ) : block.__typename === "WPGraphQL_AcfServiceIconBoxesBlock" ? (
              <ServiceIconBoxes
                key={`acf-service-icon-boxes-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></ServiceIconBoxes>
            ) : block.__typename === "WPGraphQL_AcfAboutUsTimelineBlock" ? (
              <AboutUsTimeline
                key={`acf-about-us-timeline-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></AboutUsTimeline>
            ) : block.__typename === "WPGraphQL_AcfProjectHeaderBlock" ? (
              <ProjectHeader
                key={`acf-project-header-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></ProjectHeader>
            ) : block.__typename === "WPGraphQL_AcfBuilderLogoListingsBlock" ? (
              <BuilderLogoListings
                key={`acf-builder-logo-listings-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></BuilderLogoListings>
            ) : block.__typename ===
              "WPGraphQL_AcfPropertyMapModalTriggerBlock" ? (
              <PropertyMapModalTriggerBlock
                key={`acf-property-map-modal-trigger-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></PropertyMapModalTriggerBlock>
            ) : block.__typename ===
              "WPGraphQL_AcfPropertyMapModalTrigger2Block" ? (
              <PropertyMapModalTrigger2Block
                key={`acf-property-map-modal-trigger-2-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></PropertyMapModalTrigger2Block>
            ) : block.__typename === "WPGraphQL_AcfProjectPhotoGalleryBlock" ? (
              <ProjectPhotoGallery
                key={`acf-project-photo-gallery-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></ProjectPhotoGallery>
            ) : block.__typename === "WPGraphQL_AcfProjectFeatureCardsBlock" ? (
              <ProjectFeatureCards
                key={`acf-project-feature-cards-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></ProjectFeatureCards>
            ) : block.__typename === "WPGraphQL_AcfAboutUsHeaderBlock" ? (
              <AboutUsHeader
                key={`acf-about-us-header-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></AboutUsHeader>
            ) : block.__typename === "WPGraphQL_AcfAboutUsIntroductionBlock" ? (
              <AboutUsIntroduction
                key={`acf-about-us-introduction-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></AboutUsIntroduction>
            ) : block.__typename === "WPGraphQL_AcfAboutUsWhoWeAreBlock" ? (
              <AboutUsWhoWeAre
                key={`acf-about-us-who-we-are-block-${index}`}
                {...JSON.parse(block.renderedContent)}
              ></AboutUsWhoWeAre>
            ) : block.__typename === "WPGraphQL_AcfFeatureIconBoxesBlock" ? (
              <FeatureIconBoxes
                key={`acf-feature-icon-boxes-block-${index}`}
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
