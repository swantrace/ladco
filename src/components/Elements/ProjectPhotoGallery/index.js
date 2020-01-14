import React, { useState } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import Gallery from "react-grid-gallery"
import "./style.scss"

export default ({ title, content, photos }) => {
  const [currentTag, setCurrentTag] = useState("all")
  const typeButtonClickedHandler = tag => {
    setCurrentTag(tag)
  }
  const tags = photos.reduce((acc, cur, idx, src) => {
    if (!acc.includes(cur.tag)) {
      acc.push(cur.tag)
    }
    return acc
  }, [])

  function thumbnailStyleFn() {
    console.log(this)
    return {
      backgroundColor: "black",
    }
  }

  return (
    <Container className="mt-5 project-gallery-photos mb-5">
      <Row>
        <Col className="text-center">
          <h1>{title}</h1>
          <p>{content}</p>
          <div class="portfolioFilter">
            {tags.length > 1
              ? tags.map(tag => (
                  <Button
                    onClick={e => {
                      typeButtonClickedHandler(tag)
                    }}
                    className={tag === currentTag ? "current" : ""}
                  >
                    {tag.toUpperCase()}
                  </Button>
                ))
              : null}
          </div>
          <div className="clearfix my-2"></div>
          <Gallery
            images={photos
              .filter(photo => photo.tag === currentTag)
              .map(photo => {
                if (photo.caption === "") {
                  photo.caption = photo.tag ? photo.tag.toUpperCase() : ""
                  if (photo.caption !== "ALL") {
                    photo.thumbnailCaption = photo.caption
                  }
                }
                return photo
              })}
            enableImageSelection={false}
            thumbnailStyle={thumbnailStyleFn}
          />
        </Col>
      </Row>
    </Container>
  )
}
