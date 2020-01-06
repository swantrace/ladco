import React from "react"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

const styles = css(`
  :host{ 

  }
`)
class GridGallery extends Element {
  static props = {
    images: Array,
    modalisopen: Boolean,
    currentimage: Number,
  }

  closeLightbox = () => {
    this.modalisopen = false
  }

  openLightbox = () => {
    this.modalisopen = true
  }

  render() {
    return (
      <div className="grid-gallerys">
        <style>{styles(this)}</style>
        <Gallery photos={this.images} onClick={this.openLightbox} />
        <ModalGateway>
          {this.modalisopen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={this.currentimage}
                views={this.images.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    )
  }
}

customElements.define("grid-gallery", GridGallery)
