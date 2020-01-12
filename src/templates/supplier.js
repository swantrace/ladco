import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

const menus = [
  { name: "HOME", id: "/" },
  { name: "PRAIRIE POINTE", id: "/prairie-pointe" },
  { name: "HIGHLAND POINTE", id: "/highland-pointe" },
  { name: "SOUTH POINTE", id: "/south-pointe" },
  { name: "ROYALWOOD", id: "/royalwood" },
  { name: "ABOUT US", id: "/about-us" },
  { name: "CONTACT US", id: "/contact-us" },
]

export default ({
  pageContext: {
    id,
    title,
    content,
    slug,
    gallery,
    logo,
    address,
    email,
    facebook,
    fax,
    googlePlus,
    openingHours,
    telephone,
    twitter,
    website,
  },
}) => {
  return (
    <Fragment>
      <Header menus={menus} className="LadcoHeaderArea" logo={logo} />
      <main className={`main-${pageContext.slug}`}>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <p>slug: {slug}</p>
        <ul>
          {gallery.map(imgSrc => (
            <li>
              <img src={imgSrc} alt="" key={imgSrc} />
            </li>
          ))}
        </ul>
        <p>
          <img src={logo} />
        </p>
        <p>address: {address}</p>
        <p>email: {email}</p>
        <p>facebook: {facebook}</p>
        <p>fax: {fax}</p>
        <p>googlePlus: {googlePlus}</p>
        <p>openingHours: {openingHours}</p>
        <p>telephone: {telephone}</p>
        <p>twitter: {twitter}</p>
        <p>website: {website}</p>
      </main>
      <Footer menus={menus} className="LadcoFooterArea" />
    </Fragment>
  )
}
