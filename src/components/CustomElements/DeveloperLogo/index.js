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
class DeveloperLogo extends Element {
  static props = {
    imgURL: String,
    linkTarget: String,
  }

  render() {
    return (
      <div className="developer-logo">
        <style>{styles(this)}</style>
        <Link to={this.linkTarget}>
          <img src={this.linkTarget} />
        </Link>
      </div>
    )
  }
}

customElements.define("developer-logo", DeveloperLogo)
