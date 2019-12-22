import React from "react"
export SlideShow from "./SlideShow/index"

export const Div = ({ className, children, onClick, style, id }) => {
  return (
    <div className={className} style={style} onClick={onClick} id={id}>
      {children}
    </div>
  )
}
export const H1 = ({ className, children, onClick, style, id }) => {
  return (
    <h1 className={className} onClick={onClick} id={id} style={style}>
      {children}
    </h1>
  )
}
export const H2 = ({ className, children, onClick, style, id }) => {
  return (
    <h2 className={className} onClick={onClick} id={id} style={style}>
      {children}
    </h2>
  )
}
export const H3 = ({ className, children, onClick, style, id }) => {
  return (
    <h3 className={className} onClick={onClick} id={id} style={style}>
      {children}
    </h3>
  )
}
export const H4 = ({ className, children, onClick, style, id }) => {
  return (
    <h4 className={className} onClick={onClick} id={id} style={style}>
      {children}
    </h4>
  )
}
export const H5 = ({ className, children, onClick, style, id }) => {
  return (
    <h5 className={className} onClick={onClick} id={id} style={style}>
      {children}
    </h5>
  )
}
export const H6 = ({ className, children, onClick, style, id }) => {
  return (
    <h6 className={className} onClick={onClick} id={id} style={style}>
      {children}
    </h6>
  )
}
export const P = ({ className, children, onClick, style, id }) => {
  return (
    <p className={className} onClick={onClick} id={id} style={style}>
      {children}
    </p>
  )
}
export const Small = ({ className, children, onClick, style, id }) => {
  return (
    <small className={className} onClick={onClick} id={id} style={style}>
      {children}
    </small>
  )
}
export const Strong = ({ className, children, onClick, style, id }) => {
  return (
    <strong className={className} onClick={onClick} id={id} style={style}>
      {children}
    </strong>
  )
}
export const Ul = ({ className, children, onClick, style, id }) => {
  return (
    <ul className={className} onClick={onClick} id={id} style={style}>
      {children}
    </ul>
  )
}
export const Ol = ({ className, children, onClick, style, id }) => {
  return (
    <ol className={className} onClick={onClick} id={id} style={style}>
      {children}
    </ol>
  )
}
export const Li = ({ className, children, onClick, style, id }) => {
  return (
    <li className={className} onClick={onClick} id={id} style={style}>
      {children}
    </li>
  )
}
export const Image = ({ className, onClick, src, alt, style, id }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      id={id}
      style={style}
      onClick={onClick}
    />
  )
}
export const Span = ({ className, children, onClick, style, id }) => {
  return (
    <span className={className} onClick={onClick} id={id} style={style}>
      {children}
    </span>
  )
}
export const A = ({
  className,
  children,
  onClick,
  href,
  style,
  id,
  target,
}) => {
  return (
    <a
      target={target}
      href={href}
      className={className}
      onClick={onClick}
      id={id}
      style={style}
    >
      {children}
    </a>
  )
}
export const Header = ({ className, children, onClick, style, id }) => {
  return (
    <header className={className} onClick={onClick} id={id} style={style}>
      {children}
    </header>
  )
}
export const Footer = ({ className, children, onClick, style, id }) => {
  return (
    <footer className={className} onClick={onClick} id={id} style={style}>
      {children}
    </footer>
  )
}
export const Aside = ({ className, children, onClick, style, id }) => {
  return (
    <aside className={className} onClick={onClick} id={id} style={style}>
      {children}
    </aside>
  )
}
export const Button = ({ className, children, onClick, type, style, id }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      id={id}
      style={style}
      type={type}
    >
      {children}
    </button>
  )
}

export const FontAwesome = ({ name, children, onClick, style, id }) => {
  return (
    <i className={`fa fa-${name}`} style={style} id={id} onClick={onClick}>
      {children}
    </i>
  )
}
export const Form = ({ className, children, onClick, style, onSubmit, id }) => {
  return (
    <form
      className={className}
      onClick={onClick}
      id={id}
      style={style}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}
