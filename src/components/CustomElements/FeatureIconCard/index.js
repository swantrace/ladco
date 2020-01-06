import React from "react"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"

const styles = css(`
  :host{ 

  }
  .icon {
    font-family: 'IcoMoon-Ultimate' !important;
  }
  .icon-key4:before {
    content: "\\eb4d";
  }
  .icon-calculator:before {
    content: "\\ea17";
  }
  .icon-location2:before {
    content: "\\ea39";
  }
  .icon-search4:before {
    content: "\\eb37";
  }
  .icon-users:before {
    content: "\\eaf8"
  }
`)
class FeatureIconCard extends Element {
  static props = {
    icon: String,
    title: String,
  }

  render() {
    return (
      <div className="feature-icon-card">
        <style>{styles(this)}</style>
        <div className="d-flex flex-column">
          <div className="p-2">
            <span className={`icon icon-${this.icon}`}></span>
          </div>
          <h3 className="p-2 text-center">{this.title}</h3>
        </div>
      </div>
    )
  }
}

customElements.define("feature-icon-card", FeatureIconCard)
