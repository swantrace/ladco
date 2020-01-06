import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          src="https://code.jquery.com/jquery-1.12.4.min.js"
          integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://code.jquery.com/jquery-migrate-1.4.1.min.js"
          integrity="sha256-SOuLUArmo4YXtXONKz+uxIGSKneCJG4x0nVcA0pFzV0="
          crossOrigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/qtip2/3.0.3/jquery.qtip.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/gh/StephanWagner/jBox@v1.0.5/dist/jBox.all.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://raw.githubusercontent.com/jamietre/ImageMapster/e08cd7ec24ffa9e6cbe628a98e8f14cac226a258/dist/jquery.imagemapster.min.js"
        ></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/qtip2/3.0.3/jquery.qtip.min.css"
        ></link>
        <link
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/StephanWagner/jBox@v1.0.5/dist/jBox.all.min.css"
          rel="stylesheet"
        ></link>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
