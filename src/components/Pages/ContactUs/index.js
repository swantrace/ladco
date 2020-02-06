import React, { Fragment, useState } from "react"
import { Container, Row, Col, Form, Label, Input, Button } from "reactstrap"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import AutoHide from "@ygpedroso/react-autohide"
import SupplierPageTitle from "../../Elements/SupplierPageTitle"
import "./style.scss"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $yourName: String!
    $email: String!
    $yourMessage: String!
  ) {
    createSubmission(
      input: {
        clientMutationId: $clientMutationId
        yourName: $yourName
        email: $email
        yourMessage: $yourMessage
      }
    ) {
      success
      data
    }
  }
`

const ContactUs = props => {
  const [yourName, setYourName] = useState("")
  const [email, setEmail] = useState("")
  const [yourMessage, setYourMessage] = useState("")
  const handleSubmit = (e, fn) => {
    e.preventDefault()
    const { yourName, email, yourMessage } = e.target
    const yourNameValue = yourName.value
    const emailValue = email.value
    const yourMessageValue = yourMessage.value
    console.log(yourNameValue, emailValue, yourMessageValue)
    fn({
      variables: {
        clientMutationId: "formSubmission",
        yourName: yourNameValue,
        email: emailValue,
        yourMessage: yourMessageValue,
      },
    })
    setYourMessage("")
  }
  const handleInputChange = (setFn, value) => {
    setFn(value)
  }
  return (
    <Fragment>
      <SupplierPageTitle title="Contact Us"></SupplierPageTitle>
      <Container className="my-5">
        <Row>
          <Col md="6">
            <h2 data-animation="">
              <strong>Feel free to contact us with any questions.</strong>
            </h2>
            <h4 data-animation="">
              Please see our show home builders for available lots and prices.{" "}
            </h4>
            <div className="clear" style={{ height: "80px" }}></div>
            <h2 data-animation="">
              <strong>Contact Form</strong>
            </h2>
            <Mutation mutation={CONTACT_MUTATION}>
              {(createSubmission, { loading, error, data }) => (
                <Fragment>
                  <Form
                    onSubmit={async e => {
                      handleSubmit(e, createSubmission)
                    }}
                  >
                    <fieldset>
                      <Label for="name" className="blocklabel">
                        Your Name*
                      </Label>
                      <p>
                        <Input
                          name="yourName"
                          className="input_bg"
                          type="text"
                          id="name"
                          value={yourName}
                          onChange={e => {
                            handleInputChange(setYourName, e.target.value)
                          }}
                        />
                      </p>
                      <Label for="email" className="blocklabel">
                        E-Mail*
                      </Label>
                      <p>
                        <Input
                          name="email"
                          className="input_bg"
                          type="text"
                          id="email"
                          value={email}
                          onChange={e => {
                            handleInputChange(setEmail, e.target.value)
                          }}
                        />
                      </p>
                      <Label for="message" className="blocklabel">
                        Your Message*
                      </Label>
                      <p>
                        <Input
                          name="yourMessage"
                          className="textarea_bg"
                          id="message"
                          cols="20"
                          rows="7"
                          type="textarea"
                          value={yourMessage}
                          onChange={e => {
                            handleInputChange(setYourMessage, e.target.value)
                          }}
                        />
                      </p>
                      <p></p>
                      <div className="clearfix"></div>
                      <Button
                        name="Send"
                        type="submit"
                        className="comment_submit"
                        id="send"
                        style={{
                          color: "#fff",
                          backgroundColor: "#859e40",
                          borderRadius: "4px",
                          fontSize: "13px",
                        }}
                      >
                        Submit
                      </Button>
                      <p></p>
                    </fieldset>
                  </Form>
                  <div style={{ padding: "20px" }}>
                    {loading && <p>Loading...</p>}
                    {error && (
                      <p>
                        An unknown error has occured, please try again later...
                      </p>
                    )}
                    {data && (
                      <AutoHide>Submitted Successfully! Thanks!</AutoHide>
                    )}
                  </div>
                </Fragment>
              )}
            </Mutation>
          </Col>
          <Col md="6">
            <div className="address-info">
              <h3>
                <i>Address Info</i>
              </h3>
              <ul>
                <li>
                  <strong>LADCO Company Limited</strong>
                  <br />
                  200-40 Lakewood Boulevard,Winnipeg, Manitoba R2J 2M6&nbsp;
                  <br />
                  Telephone: 877-474-5699
                  <br />
                  FAX: 204-255-3652
                  <br /> Website:{" "}
                  <a href="https://www.ladco.mb.ca">www.ladco.mb.ca</a>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
            <h3>
              <i>Find the Address</i>
            </h3>
            <div className="google-map">
              <div className="iframe-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.3664408304676!2d-97.08213538429011!3d49.854360879397554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea771b4d8b7197%3A0x4910a435f9b414d4!2s200-40%20Lakewood%20Blvd%2C%20Winnipeg%2C%20MB%20R2J%202M7!5e0!3m2!1sen!2sca!4v1579353552054!5m2!1sen!2sca"
                  title="google_map"
                  width="600"
                  height="800"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ContactUs
