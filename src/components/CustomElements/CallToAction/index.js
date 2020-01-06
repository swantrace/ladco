import React from "react"
import Element, { h } from "@skatejs/element-react"
import css from "shadow-css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const styles = css(`
  :host{ 

  }
`)
class CallToAction extends Element {
  static props = {
    style: String,
    text: String,
    content: String,
    "button-text": String,
    "is-open": Boolean,
  }

  handleClick = e => {
    console.log(e, this.props)
    this["is-open"] = !this["is-open"]
  }

  handleToggle = e => {
    this["is-open"] = !this["is-open"]
  }

  render() {
    console.log(this["is-open"])
    return (
      <div className="call-to-action">
        <style>{styles(this)}</style>
        <div className="call-to-action-text">{this.text}</div>
        <Button onClick={this.handleClick}>{this["button-text"]}</Button>
        <Modal isOpen={this["is-open"]}>
          <ModalHeader toggle={this.handleToggle}>Modal title</ModalHeader>
          <ModalBody>
            <div dangerouslySetInnerHTML={{ __html: this.content }} />
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

customElements.define("call-to-action", CallToAction)
