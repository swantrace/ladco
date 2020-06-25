import React, { useState, useEffect, useRef } from "react"
import ImageMapper from "react-image-mapper"
import ContainerDimensions from "react-container-dimensions"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import "./style.scss"

export default ({
  content,
  property_category,
  propertyCategories,
  map_image,
  properties,
  suppliers,
  stages,
  slug,
}) => {
  const [modal, setModal] = useState(false)
  const [supplier, setSupplier] = useState(null)
  const [property, setProperty] = useState(null)
  const [stage, setStage] = useState(null)
  const [nestedModal, setNestedModal] = useState(false)
  const toggle = () => setModal(!modal)
  const toggleNested = () => setNestedModal(!nestedModal)
  const modalEl = useRef(null)
  const imageMapperEl = useRef(null)
  useEffect(() => {})

  const propertyCategory = propertyCategories.find(
    propertyCategory =>
      parseInt(propertyCategory.id) === parseInt(property_category)
  )

  const areas = properties
    .filter(function(property) {
      return (
        property.category === propertyCategory.slug && property.sold !== true
      )
    })
    .map(property => {
      return {
        _id: `property,${property.propertyCode},${property.supplierId}`,
        shape: "poly",
        coords: property.coords == null ? [] : property.coords.split(","),
        preFillColor: property.showHome ? "#e8b586" : "#ece69291",
      }
    })
    .concat(
      stages
        .filter(stage => {
          return stage.category === propertyCategory.slug
        })
        .map(stage => {
          return {
            _id: `stage,${stage.title}`,
            shape: "poly",
            coords: stage.coords == null ? [] : stage.coords.split(","),
            fillColor: "rgba(245, 252, 173, 0.5)",
          }
        })
    )

  const clickHandler = (area, index, event) => {
    const areaIdArr = area._id.split(",")
    if (areaIdArr[0] === "property" && areaIdArr[2] && areaIdArr[1]) {
      const supplierId = areaIdArr[2]
      const supplier = suppliers.find(
        supplier => parseInt(supplier.id) === parseInt(supplierId)
      )
      const propertyCode = areaIdArr[1]
      const property = properties.find(
        property => property.propertyCode === propertyCode
      )
      if (supplier && property && property.title) {
        setProperty(property)
        setSupplier(supplier)
        setNestedModal(true)
      }
    } else if (areaIdArr[0] === "stage") {
      const stageTitle = areaIdArr[1]
      const stage = stages.find(stage => stage.title === stageTitle)
      if (stage) {
        setStage(stage)
        const modalBody = modalEl.current._dialog.querySelector(".modal-body")
        const modalBodyCenterX = modalBody.offsetWidth / 2
        const modalBodyCenterY = modalBody.offsetHeight / 2
        const areaCenterX = area.center[0]
        const areaCenterY = area.center[1]
        imageMapperEl.current.container.style.setProperty("overflow", "hidden")
        imageMapperEl.current.img.style.setProperty(
          "transform",
          `scale(2.35) translate(${modalBodyCenterX -
            areaCenterX}px, ${modalBodyCenterY - areaCenterY}px)`
        )
        imageMapperEl.current.canvas.style.setProperty(
          "transform",
          `scale(2.35) translate(${modalBodyCenterX -
            areaCenterX}px, ${modalBodyCenterY - areaCenterY}px)`
        )
      }
    }
  }

  const imageClickHandler = event => {
    setStage(null)
    imageMapperEl.current.container.style.removeProperty("overflow")
    imageMapperEl.current.img.style.removeProperty("transform")
    imageMapperEl.current.canvas.style.removeProperty("transform")
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <div
            className="animated-block call-to-action-2  group1 transparent-animation fadeIn animated"
            data-animation="fadeIn"
            style={{ animationDelay: "0s" }}
          >
            <Container fluid="xl">
              <div className="sc-highlight">
                <div className="punch_text">
                  <b>{content}</b>
                  <Button className="mappopup" onClick={toggle}>
                    View now!
                  </Button>
                  <Modal
                    isOpen={modal}
                    toggle={toggle}
                    size="lg"
                    centered={true}
                    ref={modalEl}
                    wrapClassName="popup-map"
                  >
                    <ModalHeader toggle={toggle}>
                      {stage && stage.title
                        ? stage.title
                        : propertyCategory.name}
                    </ModalHeader>
                    <ModalBody>
                      <ContainerDimensions>
                        {({ width }) => (
                          <ImageMapper
                            src={`/${map_image.split(",")[0]}`}
                            width={width}
                            imgWidth={parseInt(map_image.split(",")[1])}
                            ref={imageMapperEl}
                            onClick={clickHandler}
                            onImageClick={imageClickHandler}
                            map={{
                              name: propertyCategory.slug,
                              areas: areas,
                            }}
                          />
                        )}
                      </ContainerDimensions>
                    </ModalBody>

                    <Modal
                      isOpen={nestedModal}
                      toggle={toggleNested}
                      wrapClassName="property-detail"
                    >
                      <ModalHeader>Property Details</ModalHeader>
                      <ModalBody>
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: property && property.title,
                          }}
                        />
                        <div className="clearfix"></div>
                        <div className="entry property property-smaller">
                          <p>
                            If you are interested in this property please
                            reference the Property ID and contact us.
                          </p>
                          <div className="divider"></div>
                          <div className="property-information">
                            <div className="supplier-contact">
                              <div className="supplier-logo">
                                <img
                                  style={{ maxHeight: "40px", width: "auto" }}
                                  src={supplier && supplier.logo}
                                  className="attachment-thumbnail size-thumbnail"
                                  alt={supplier && supplier.title}
                                />
                              </div>
                              <Link
                                to={
                                  supplier && supplier.slug
                                    ? `/suppliers/${supplier.slug}`
                                    : `#`
                                }
                              >
                                <h2
                                  dangerouslySetInnerHTML={{
                                    __html: supplier && supplier.title,
                                  }}
                                />
                              </Link>
                              <div className="supplier-contact-address">
                                {supplier && supplier.address ? (
                                  <p>
                                    <strong>Address:</strong>
                                    <span>
                                      &nbsp;
                                      {supplier.address}
                                    </span>
                                  </p>
                                ) : null}
                                {supplier && supplier.phone ? (
                                  <p>
                                    <strong>Telephone:</strong>
                                    <span>
                                      &nbsp;
                                      <a href={`tel:${supplier.phone}`}>
                                        {supplier.phone}
                                      </a>
                                    </span>
                                  </p>
                                ) : null}
                                {supplier && supplier.fax ? (
                                  <p>
                                    <strong>Fax:</strong>
                                    <span>&nbsp;{supplier.fax}</span>
                                  </p>
                                ) : null}
                                {supplier && supplier.email ? (
                                  <p>
                                    <strong>Email:</strong>
                                    <span>
                                      &nbsp;
                                      <a
                                        href={`mailto:${supplier.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {supplier.email}
                                      </a>
                                    </span>
                                  </p>
                                ) : null}
                                {supplier && supplier.website ? (
                                  <p>
                                    <strong>Website:</strong>
                                    <span>
                                      &nbsp;
                                      <a href={supplier.website}>
                                        {supplier.website}
                                      </a>
                                    </span>
                                  </p>
                                ) : null}
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </ModalBody>
                    </Modal>
                  </Modal>
                </div>
                <div className="clearfix"></div>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
