import React from "react"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"
import { Link } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const styles = css(`
  :host{ 

  }
  .icon {
    font-family: 'IcoMoon-Ultimate' !important;
  }
  .icon-tree2:before {
    content: "\\ebd3";
  }
  .icon-leaf2:before {
    content: "\\ebce"
  }
  .icon-home6:before {
    content: "\\e905"
  }
  .icon-checkbox-checked:before {
    content: "\\ee66"
  }
  .icon-location2:before {
    content: "\\ea39"
  }
  .icon-heart4:before {
    content: "\\ecea"
  }
`)

class SouthPointeFeatureCard extends Element {
  static props = {
    icon: String,
    name: String,
    intro: String,
    isOpen: Boolean,
  }

  handleClick = e => {
    console.log(e, this.props)
    this.isOpen = !this.isOpen
  }

  handleToggle = e => {
    this.isOpen = !this.isOpen
  }

  render() {
    return (
      <div className="south-pointe-feature-card">
        <style>{styles(this)}</style>
        <div onClick={this.handleClick}>
          <div className="left">
            <span className={`icon icon-${this.icon}`}></span>&nbsp;
          </div>
          <div className="right">
            <h3>{this.name}</h3>
            <p>{this.intro}</p>
          </div>
        </div>
        <Modal isOpen={this.isOpen}>
          <ModalHeader toggle={this.handleToggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleToggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.handleToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

customElements.define("south-pointe-feature-card", SouthPointeFeatureCard)
