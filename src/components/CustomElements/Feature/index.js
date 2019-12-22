import React from "react"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"

const styles = css(`
  :host{ 
    font-size: 20px; 
    color: red; 
  }
  .icon-box-title {
    color: green;
  }
  .icon-box-content {
    color: blue;
  }
`)
class Hello extends Element {
  static props = {
    name: String,
  }

  render() {
    return (
      <div>
        <style>{styles(this)}</style>
        <div class="icon-box-title">
          <slot name="icon-box-title">Default Title</slot>
        </div>
        <div class="icon-box-content">
          <slot name="icon-box-content">Default Content</slot>
        </div>
      </div>
    )
  }
}

customElements.define("x-hello", Hello)
