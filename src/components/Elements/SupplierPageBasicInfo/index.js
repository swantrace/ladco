import React from "react"
import "./style.scss"

export default ({
  title,
  supplierLogo,
  address,
  telephone,
  fax,
  email,
  website,
}) => (
  <div className="supplier-basic-info">
    <div className="supplier-logo-title d-flex">
      <img
        src={supplierLogo}
        alt=""
        style={{ maxWidth: "300px", marginRight: "10px", maxHeight: "100px", marginBottom: "20px" }}
      ></img>
      <h2
        style={{
          marginBottom: "0",
          fontSize: "27px",
          lineHeight: "52px",
          fontWeight: "normal",
          display: "none",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
    <div className="supplier-contact-info">
      {address ? (
        <p>
          <strong>Address: </strong>
          <span>
            {" "}
            <a
              href={`http://maps.google.com/maps?q=${encodeURI(address)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          </span>
        </p>
      ) : (
        <p>
          <strong>Address: </strong>
        </p>
      )}
      {telephone ? (
        <p>
          <strong>Telephone: </strong>
          <span>
            {" "}
            <a
              href={`tel:${telephone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {telephone}
            </a>
          </span>
        </p>
      ) : (
        <p>
          <strong>Telephone: </strong>
        </p>
      )}
      {fax ? (
        <p>
          <strong>Fax: </strong>
          <span> {fax}</span>
        </p>
      ) : (
        <p>
          <strong>Fax: </strong>
        </p>
      )}
      {email ? (
        <p>
          <strong>Email: </strong>
          <span>
            {" "}
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </span>
        </p>
      ) : (
        <p>
          <strong>Email: </strong>
        </p>
      )}
      {website ? (
        <p>
          <strong>Website: </strong>
          <span>
            {" "}
            <a href={telephone} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </span>
        </p>
      ) : (
        <p>
          <strong>Website: </strong>
        </p>
      )}
    </div>
  </div>
)
