import React from "react"
import Element, { h } from "@skatejs/element-react"
import Slider from "react-slick"
import css from "shadow-css"
import "./slick.css"
import "./slick-theme.css"

const styles = css(`
  :host{ 
    @import url("./slick.css");
    @import url("./slick-theme.css");
  }
`)
class SlideShow extends Element {
  static props = {
    settings: Object,
  }

  render() {
    return (
      <div className="slide-show">
        <style>{styles(this)}</style>
        <Slider {...this.settings}>
          <slot />
        </Slider>
      </div>
    )
  }
}

customElements.define("slide-show", SlideShow)
