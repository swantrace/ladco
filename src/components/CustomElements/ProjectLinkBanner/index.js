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
  .icon-leaf2:before {
    content: "\\ebce";
  }
`)
class ProjectLinkBanner extends Element {
  static props = {
    icon: String,
    name: String,
    intro: String,
    "link-target": String,
    "link-text": String,
  }

  render() {
    return (
      <div className="project-link-banner">
        <style>{styles(this)}</style>
        <div className="left">
          <h1>
            {this.name}
            <em>{this.intro}</em>
          </h1>
        </div>
        <div className="right">
          <Link to={this["link-target"]}>
            <span className={`icon icon-${this.icon}`}></span>&nbsp;{" "}
            {this["link-text"]}
          </Link>
        </div>
      </div>
    )
  }
}

customElements.define("project-link-banner", ProjectLinkBanner)
