import React from "react"
import Helmet from "react-helmet"

export default React.memo(({ defaultTitle, title, url }) => (
  <Helmet>
    {/* Schema.org tags */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "WebSite",
        url,
        name: title,
        alternateName: defaultTitle,
      })}
    </script>
  </Helmet>
))
