import React from "react"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"
import { Link } from "gatsby"

const styles = css(`
  :host{ 

  }
  .icon {
    font-family: 'IcoMoon-Ultimate' !important;
  }
  .icon-map2:before {
    content: "\\ea46";
  }
  .icon-home6:before {
    content: "\\e900";
  }
  .icon-office:before {
    content: "\\e909";
  }
  .icon-wrench:before {
    content: "\\eb58";
  }
  .icon-users3:before {
    content: "\\eb01"
  }
`)
class FeatureIconBox extends Element {
  static props = {
    icon: String,
    title: String,
    content: String,
    "link-target": String,
    "link-text": String,
  }

  render() {
    return (
      <div className="feature-icon-box">
        <style>{styles(this)}</style>
        <span className={`icon icon-${this.icon}`}></span>
        <div className="clearfix"></div>
        <h2>{this.title}</h2>
        <p>{this.content}</p>
        <Link to={this["link-target"]}>{this["link-text"]}</Link>
      </div>
    )
  }
}

customElements.define("feature-icon-box", FeatureIconBox)
