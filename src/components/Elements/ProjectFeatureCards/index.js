import React, { useState } from "react"
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap"
import "./style.scss"

export default ({ project_feature_card }) => {
  const [modalImage, setModalImage] = useState("")
  const [modalTitle, setModalTitle] = useState("")
  const [modal, setModal] = useState(false)
  const openModalHandler = (image, title) => {
    setModalTitle(title)
    setModalImage(image)
    setModal(true)
  }
  const toggleModalHandler = (image, title) => {
    if (modal) {
      closeModalHandler()
    } else {
      openModalHandler(image)
    }
  }
  const closeModalHandler = () => {
    setModalImage("")
    setModal(false)
  }

  return (
    <Container fluid="xl" className="project-featture-cards mt-5">
      <Row className="justify-content-between">
        {project_feature_card.map(({ icon, title, content, image }) => (
          <Col
            lg="4"
            md="6"
            sm="12"
            key={title}
            onClick={e => {
              openModalHandler(image, title)
            }}
          >
            <div
              className="sp-beauty pum-trigger"
              style={{ cursor: "pointer" }}
            >
              <ul
                className="lirc_section animated-block group2 transparent-animation fadeIn animated"
                data-animation="fadeIn"
                style={{ animationDelay: "0s" }}
              >
                <li className="left">
                  <i className={`icon ${icon} icon-3x`}></i>
                </li>
                <li className="right">
                  <h3>
                    <i>{title}</i>
                  </h3>
                </li>
                <li className="right">
                  <p>{content}</p>
                  <p></p>
                </li>
              </ul>
            </div>
          </Col>
        ))}
        <Modal isOpen={modal} toggle={toggleModalHandler} centered={true}>
          <ModalHeader toggle={toggleModalHandler}>{modalTitle}</ModalHeader>
          <ModalBody>
            <img src={modalImage} alt={modalTitle} />
          </ModalBody>
        </Modal>
      </Row>
    </Container>
  )
}
