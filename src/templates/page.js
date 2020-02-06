import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"
import Home from "../components/Pages/Home/index"
import PrairiePointe from "../components/Pages/PrairiePointe/index"
import HighlandPointe from "../components/Pages/HighlandPointe/index"
import SouthPointe from "../components/Pages/SouthPointe/index"
import Royalwood from "../components/Pages/Royalwood/index"
import AboutUs from "../components/Pages/AboutUs/index"
import ContactUs from "../components/Pages/ContactUs/index"
import logo from "../assets/images/logo.png"
import ProjectLinkBanner from "../components/Elements/ProjectLinkBanner/index"
import ServiceIconBoxes from "../components/Elements/ServiceIconBoxes/index"
import AboutUsTimeline from "../components/Elements/AboutUsTimeline/index"
import PropertyMapModalTriggerBlock from "../components/Elements/PropertyMapModalTriggerBlock/index"
import BuilderLogoListings from "../components/Elements/BuilderLogoListings/index"
import ProjectHeader from "../components/Elements/ProjectHeader/index"
import PropertyMapModalTrigger2Block from "../components/Elements/PropertyMapModalTrigger2Block/index"
import ProjectPhotoGallery from "../components/Elements/ProjectPhotoGallery/index"
import ProjectFeatureCards from "../components/Elements/ProjectFeatureCards/index"
import AboutUsIntroduction from "../components/Elements/AboutUsIntroduction/index"
import AboutUsWhoWeAre from "../components/Elements/AboutUsWhoWeAre/index"
import FeatureIconBoxes from "../components/Elements/FeatureIconBoxes/index"
import AboutUsHeader from "../components/Elements/AboutUsHeader/index"
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

export default ({ pageContext, location }) => {
  const properties = pageContext.properties.map(property => ({
    title: property.title,
    showHome: !!property.propertyInfoGroup.showHome,
    sold: !!property.propertyInfoGroup.sold,
    propertyCode: property.propertyInfoGroup.propertyCode,
    coords: property.propertyInfoGroup.coords,
    supplierId: property.propertyInfoGroup.supplier.databaseId,
    category:
      property.propertyCategories.nodes.length > 0
        ? property.propertyCategories.nodes[0].slug
        : null,
  }))
  const suppliers = pageContext.suppliers.map(supplier => ({
    logo: supplier.supplierInfoGroup.logo
      ? supplier.supplierInfoGroup.logo.mediaItemUrl
      : "",
    id: supplier.databaseId,
    title: supplier.title,
    slug: supplier.slug,
    address: supplier.supplierInfoGroup.supplierContactAddress,
    email: supplier.supplierInfoGroup.supplierEmail,
    phone: supplier.supplierInfoGroup.supplierTelephone,
    website: supplier.supplierInfoGroup.supplierWebsite,
    fax: supplier.supplierInfoGroup.supplierFax,
  }))
  const stages = pageContext.stages.map(stage => ({
    title: stage.title,
    coords: stage.stageInfoGroup.coords,
    category:
      stage.propertyCategories.nodes.length > 0
        ? stage.propertyCategories.nodes[0].slug
        : "",
  }))
  const propertyCategories = pageContext.propertyCategories.map(
    propertyCategory => ({
      slug: propertyCategory.slug,
      id: propertyCategory.databaseId,
      name: propertyCategory.name,
    })
  )
  var PageWrapperFunc = null
  switch (pageContext.slug) {
    case "home":
      PageWrapperFunc = props => (
        <Home pageContext={props.pageContext} location={props.location}>
          {props.children}
        </Home>
      )
      break
    case "prairie-pointe":
      PageWrapperFunc = props => (
        <PrairiePointe
          pageContext={props.pageContext}
          location={props.location}
        >
          {props.children}
        </PrairiePointe>
      )
      break
    case "highland-pointe":
      PageWrapperFunc = props => (
        <HighlandPointe
          pageContext={props.pageContext}
          location={props.location}
        >
          {props.children}
        </HighlandPointe>
      )
      break
    case "south-pointe":
      PageWrapperFunc = props => (
        <SouthPointe pageContext={props.pageContext} location={props.location}>
          {props.children}
        </SouthPointe>
      )
      break
    case "royalwood":
      PageWrapperFunc = props => (
        <Royalwood pageContext={props.pageContext} location={props.location}>
          {props.children}
        </Royalwood>
      )
      break
    case "about-us":
      PageWrapperFunc = props => (
        <AboutUs pageContext={props.pageContext} location={props.location}>
          {props.children}
        </AboutUs>
      )
      break
    case "contact-us":
      PageWrapperFunc = props => (
        <ContactUs pageContext={props.pageContext} location={props.location}>
          {props.children}
        </ContactUs>
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
        <PageWrapperFunc pageContext={pageContext} location={location}>
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
                properties={properties}
                suppliers={suppliers}
                stages={stages}
                propertyCategories={propertyCategories}
                slug={pageContext.slug}
              ></PropertyMapModalTriggerBlock>
            ) : block.__typename ===
              "WPGraphQL_AcfPropertyMapModalTrigger2Block" ? (
              <PropertyMapModalTrigger2Block
                key={`acf-property-map-modal-trigger-2-block-${index}`}
                {...JSON.parse(block.renderedContent)}
                properties={properties}
                suppliers={suppliers}
                stages={stages}
                propertyCategories={propertyCategories}
                slug={pageContext.slug}
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
                location={location}
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
